# AEGIS — Architecture Outline

> Status: preparation outline (19 Nov 2026). Full build starts after 9 Dec 2026.
> Stack choices favour speed of solo build, demo reliability, and low operating cost
> (the prototype must stay live for judges until May 2027).

## 1. System overview

```
                    ┌──────────────────────────────────────┐
                    │              USER (chat UI)           │
                    │  web app · mobile-responsive · EN/AR/ID│
                    └──────────────┬───────────────────────┘
                                   │ HTTPS / WebSocket
                    ┌──────────────▼───────────────────────┐
                    │          AGENT ORCHESTRATOR           │
                    │  plan → act → verify → explain loop   │
                    │  (LLM planner + deterministic tools)  │
                    └──┬──────┬──────┬──────┬──────┬───────┘
                       │      │      │      │      │
        ┌──────────────▼─┐ ┌──▼───┐ ┌▼────┐ ┌▼────┐ ┌▼──────────────┐
        │ Chain Reader   │ │ Sim  │ │Audit│ │Intel│ │ Watchtower    │
        │ + TX Simulator │ │Engine│ │Engine│ │Feed │ │ (monitoring)  │
        └───────┬────────┘ └──┬───┘ └──┬──┘ └──┬──┘ └───────┬───────┘
                │             │        │       │            │
        ┌───────▼─────────────▼────────▼───────▼────────────▼───────┐
        │  Threat Graph (Postgres) · Verdict Cache (Redis) · Logs  │
        └───────────────────────────────────────────────────────────┘
```

**Core design decision:** the LLM *plans and explains*, deterministic code *verifies*.
No verdict ever comes from the LLM alone — every risk claim is backed by a tool
result (simulation output, bytecode/source analysis, intelligence match). This is
what makes the agent trustworthy and the demo reproducible.

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js (React, TypeScript) on Vercel | Fast solo build, free/cheap hosting, judges get a public link |
| Agent runtime | Node.js + TypeScript, LangGraph-style state machine (own lightweight loop; no heavy framework dependency) | Full control of the plan→act→verify loop; debuggable |
| LLM | Gemini (primary) with fallback provider | Already connected; strong multilingual (EN/AR/ID); generous free tier |
| Chain access | Public JSON-RPC (BNB Chain + Ethereum at launch; Base/Polygon next) | No API key dependency for reads; `eth_call` simulation |
| Contract data | Sourcify + block-explorer APIs (verified source); GoPlus public API as one signal input | Verified source enables real audit reasoning |
| Threat intel | GoPlus malicious-address API + ScamSniffer-style public lists + AEGIS community reports | Layered signals, no single point of failure |
| Database | Postgres (Supabase free tier) — threat graph, reports, verdict history | Relational graph queries; free tier suffices for prototype |
| Cache/queue | Upstash Redis (free tier) | Verdict caching (cost + latency), Watchtower job queue |
| Monitoring | Watchtower cron (Vercel Cron / lightweight poller) | 24/7 wallet watch, alerting |
| Auth | Wallet-connect (read-only) + optional email; no passwords stored | Users never share keys; agent is read-only by construction |

## 3. Agent components

### 3.1 Orchestrator (the agent loop)
- **Understand:** intent classification (check token / check link / check wallet /
  pre-sign review / report scam) + entity extraction (addresses, URLs, amounts).
- **Plan:** builds a check-plan from the intent: which tools, in which order, with
  which fallbacks. Plans are logged and shown to the user ("I'm checking the
  contract source, simulating the transfer, and screening the address…").
- **Act:** executes tools in parallel where independent; each tool returns structured
  evidence (not prose).
- **Verify:** a deterministic **verdict engine** combines tool evidence into a risk
  score and a verdict (SAFE / CAUTION / DANGEROUS / UNVERIFIED) with a confidence
  level. Rules are explicit and auditable (e.g. "unlimited approval to a contract
  deployed <24h ago with unverified source = DANGEROUS").
- **Explain:** the LLM turns the structured verdict into a plain-language explanation
  in the user's language, citing the specific evidence items. The LLM never invents
  risk factors — it only verbalises tool output.
- **Adapt:** user feedback (confirm / dispute), community reports, and outcome data
  update the threat graph and tune verdict thresholds.

### 3.2 Chain Reader + Transaction Simulator
- `eth_call` against live state to simulate the exact calldata the user is about to
  sign: token movements, approvals granted (spender, amount, unlimited?), ETH/BNB
  value, and the receiving contract.
- Decodes calldata into human-readable intent ("approve USDT spender 0x… unlimited").
- Detects: unlimited approvals, `setApprovalForAll`, value transfers to fresh
  addresses, interactions with known drainer patterns, signature requests
  (EIP-712 permit / `permit2`) that would grant spending rights.

### 3.3 Contract Audit Engine
- Fetches verified source (Sourcify; fallback: explorer API); if source is
  unverified, that itself is a risk signal.
- Static checks: honeypot patterns (sell restrictions, blacklists, transfer taxes
  > threshold, modifiable tax), hidden mint, owner privileges (pause, blacklist,
  ownership renouncement status), proxy/upgradability (implementation can change
  under the user).
- Behavioural checks: holder concentration, liquidity lock status, deployer history
  (age, prior rugs linked to the deployer), trading status.
- LLM-assisted audit summary over the verified source for the "why" — constrained to
  evidence the static checks produced.

### 3.4 Threat Intelligence
- Address screening (GoPlus malicious-address API + public blocklists).
- URL/phishing check: domain age, typosquat similarity to known brands, blocklist
  match, content heuristics for fake-airdrop pages.
- **Community threat graph:** user-submitted scam reports, agent-verified, stored in
  Postgres with address/URL/token nodes and typed edges (deployed-by, funded-by,
  impersonates). One verified report protects every user.

### 3.5 Watchtower (24/7 monitoring)
- Polls subscribed wallets (user opts in per wallet): new approvals, new token
  receipts (airdrop/poisoning detection), interactions with newly-flagged addresses.
- Alert channels: in-app + email at launch (Telegram/X later).
- **Remediation actions (user-approved only):** one-tap approval revocation —
  AEGIS prepares the revoke transaction, shows the plain-language preview, and the
  user signs in their own wallet. AEGIS never signs anything itself.

### 3.6 Verdict Cache & Evaluation Harness
- Verdicts cached by (chain, address, code-hash) — identical contracts get instant,
  consistent answers; cuts LLM and RPC cost.
- `eval/` harness: labelled dataset of 100 contracts (50 scam / 50 legitimate) +
  scripted user-task scenarios; runs in CI on every change. Target: ≥90% accuracy,
  **zero false-SAFE on the scam set**.

## 4. Demo flow (what judges see — also the 2-minute video script)

1. **Hook (0:00–0:20):** a real scam scenario — user receives a "free airdrop" link.
   AEGIS verdict in chat: DANGEROUS, with reasons.
2. **Pre-sign save (0:20–1:00):** user pastes a transaction to sign; AEGIS simulates
   it live and shows "This lets the contract take ALL your USDT — don't sign", with
   the decoded approval in plain language.
3. **Wallet health (1:00–1:30):** one-tap wallet check finds an old unlimited approval
   to a now-flagged contract; one-tap revoke, with the preview shown.
4. **Network effect (1:30–2:00):** the scam just reported is now flagged for a second
   user instantly — the threat graph in action. Counter: "USD X in prevented losses
   this week."

All four beats run against **live chain data** (BNB Chain + Ethereum). Clearly
labelled simulated inputs are used only where a live scam interaction would put real
funds at risk (e.g. the planted scam approval uses a test wallet with dust balances).

## 5. Data & safety architecture

- **No private keys, ever.** The agent holds no signing material; remediation
  transactions are prepared, previewed, and signed by the user in their own wallet.
- **Read-only by default.** All chain access is `eth_call` / RPC reads.
- **Fail closed.** Missing data, unverified source, or tool failure → UNVERIFIED
  verdict ("I can't confirm this is safe") — never a green light on missing evidence.
- **Privacy.** Wallet addresses are pseudonymous; no KYC, no personal data; chat
  history deletable; no data sold or shared outside the threat graph's public
  scam indicators (addresses/URLs only, never user identities).
- **Cost control.** Verdict cache + per-user rate limits + fixed LLM budget guard so
  the prototype can stay live for judges through May 2027.

## 6. Build plan (post-9 Dec 2026)

| Week | Milestone |
|---|---|
| 10–16 Dec | Scaffold + Chain Reader + Simulator + Audit Engine (core tools, CLI-testable) |
| 17–23 Dec | Orchestrator + chat UI + verdict engine + threat graph + Watchtower |
| 24–28 Dec | Eval harness (100-contract benchmark + user tests), polish, deploy public link |
| 29 Dec – 3 Jan | Deck finalisation, demo video, user records 6-min pitch video (face on camera) |
| **4 Jan 2027** | **Submit before 14:59 WIB** |
| Jan–May 2027 | If semi-finalist: harden to fully functional live agent for the Grand Final |

## 7. Repository layout (target)

```
aegis/
├── README.md
├── CONCEPT.md · ARCHITECTURE.md · PITCH_DECK_OUTLINE.md · VIDEO_SCRIPTS.md
├── docs/RESEARCH.md
├── app/                  # Next.js frontend + API routes (agent backend)
│   ├── src/agent/        # orchestrator, verdict engine, tools
│   ├── src/chain/        # RPC client, simulator, audit engine
│   ├── src/intel/        # threat intel clients, threat graph
│   ├── src/components/   # chat UI, verdict cards, wallet health
│   └── src/app/          # pages + API routes
├── eval/                 # labelled dataset + benchmark harness
├── prisma/ or supabase/  # threat-graph schema
└── scripts/              # watchtower poller, seed data
```
