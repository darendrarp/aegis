# AEGIS — Concept

**Category:** Best Societal AI Agent
**One-liner:** AEGIS is an autonomous guardian agent that stops crypto scams *before*
money moves — protecting the people fraudsters target most.
**Tagline:** *Your AI bodyguard for Web3.*

---

## 1. The problem

Crypto fraud is the largest financial crime ordinary people face today, and it is
getting worse, not better:

- **USD 17 billion** lost to crypto scams globally in 2025 (Chainalysis 2026 Crypto
  Crime Report; at least USD 14B confirmed on-chain).
- **USD 11.4 billion** in reported US losses alone in 2025 across 181,565 complaints
  (FBI IC3 2025 Internet Crime Report) — up 22% year over year. Crypto investment
  fraud (USD 7.2B) is the FBI's single largest-loss crime category.
- **Victims over 60 lost USD 4.4 billion** — the hardest-hit age group. The average
  scam payment jumped 253% in one year (USD 782 → USD 2,764).
- **Impersonation scams grew 1,400%** in 2025; AI-enabled scam operations earn **4.5×**
  more per campaign than non-AI ones (Chainalysis). Scammers already use AI agents.
  Victims still defend themselves with nothing but a warning popup.
- Blockchain transactions are **irreversible**: there is no chargeback, no fraud
  department, no undo button. Prevention is the only intervention that works — and
  the FBI's own guidance concedes that individual-level prevention is "the most
  realistic near-term intervention."

**Who gets hurt:** first-time crypto users, elderly savers, migrant workers sending
remittances, and retail users in emerging markets — people with the least technical
literacy and the least ability to absorb a loss. In the UAE, a global crypto hub with
a large expatriate population, the same pattern plays out at scale.

**Why existing tools fail them:**
- Scanners (GoPlus, Blockaid, Wallet Guard) are **passive**: they show a red/yellow
  flag and leave the decision to a user who cannot interpret it. A flag is not
  protection.
- They are **B2B-first**: built as APIs for wallets and exchanges, not as a companion
  for a non-technical person.
- They **detect but do not act**: no autonomous remediation (revoking a dangerous
  approval still requires the victim to do it themselves, in time).
- They speak **developer language**: "honeypot", "proxy contract", "setApprovalForAll"
  mean nothing to the people being robbed.

## 2. The solution: AEGIS

AEGIS is an **autonomous agent**, not a scanner. It follows the championship's own
agentic loop — Understand → Plan → Act → Adapt — on behalf of each user:

1. **Understand** — The user talks to AEGIS in plain language (chat, in English,
   Arabic, or Indonesian at launch): *"Is this token safe?"*, *"Someone sent me this
   link, should I click it?"*, *"Check my wallet."* AEGIS understands the goal.
2. **Plan** — It decomposes the request into checks: simulate the transaction against
   live chain state, audit the contract (verified source + behavioural signals),
   screen addresses against threat intelligence, inspect approvals, check the URL.
3. **Act** — It executes the checks with real tools, then **acts on the findings**:
   blocks a dangerous signature with a plain-language explanation, queues a
   one-tap approval revocation, quarantines a suspicious airdrop token from the
   user's view, and files the scam into a shared threat graph so the *next* user is
   protected automatically.
4. **Adapt** — Every verdict, user confirmation, and community report feeds back into
   its risk models. A scam seen once anywhere in the network is recognised everywhere.

### What AEGIS does (launch scope)

| Capability | What the user sees |
|---|---|
| **Pre-sign Guardian** | Before any signature: a plain-language card — "This lets contract X move ALL your USDT, forever. This contract was deployed 2 hours ago and hides its code. **Don't sign.**" |
| **Token & Contract Audit** | Paste any token/contract: honeypot test, hidden mint, owner powers, liquidity locks, holder concentration — explained in one paragraph a non-technical user understands. |
| **Wallet Health Check** | One-tap scan: dangerous open approvals, poisoned tokens, past interaction with flagged addresses — with one-tap fixes. |
| **Scam Link & Message Check** | Paste a link, screenshot text, or message: phishing / impersonation / fake-airdrop verdict in seconds. |
| **24/7 Watchtower** | Continuous monitoring: alerts the moment a new approval is granted, a known scammer interacts with the wallet, or a held token turns malicious. |
| **Threat Graph** | Community-reported scams, verified by the agent, shared across all users in real time. |

### Design principles (Trust, Safety & Human Oversight — 15% of judging)

- **Never holds keys, never moves funds.** AEGIS is read-only plus *user-approved*
  remediation transactions (e.g. revoking an approval), each shown as a plain-language
  preview before the user signs. The agent can never drain, transfer, or approve
  anything on its own.
- **Fail closed.** Ambiguous verdict → "I can't verify this is safe — don't proceed"
  plus the reasons, never a false green light.
- **Explainable by default.** Every verdict ships with the evidence behind it, in
  plain language, with sources.
- **Privacy-preserving.** Wallet addresses are pseudonymous identifiers; no personal
  data is collected; chat history is user-owned and deletable.

## 3. Who it serves

- **Primary:** retail crypto users worldwide who cannot read a contract — first-time
  buyers, elderly users, remittance senders. ~560M crypto owners globally (Triple-A,
  2024); the overwhelming majority have no security tooling.
- **Secondary:** wallets, exchanges, and fintech apps that embed AEGIS as their
  user-protection layer (B2B API — the revenue engine).
- **Dubai relevance:** the UAE is positioning itself as the world's safest regulated
  crypto hub (VARA). A consumer-protection agent built in Dubai, for the world,
  directly serves that national narrative — and the Grand Final jury includes UAE
  government leaders and investors who own it.

## 4. Why AEGIS wins

1. **Real, measured, growing problem** — USD 17B/year, with authoritative sources
   (FBI, Chainalysis), and a victim profile (elderly, newcomers, migrants) that is
   unambiguously societal.
2. **Genuinely agentic** — not a chatbot wrapper and not a scanner with a chat UI.
   It plans multi-step investigations, uses tools, takes protective action, and
   learns. It matches the championship's own definition of an AI agent.
3. **Demonstrable in 2 minutes** — a live scam contract, a real simulation, a blocked
   signature, a plain-language verdict. Judges see a crime being prevented, not a
   slideware promise.
4. **Defensible moat** — the threat graph compounds: every user report and every agent
   investigation makes every other user safer. Network effects, not just a model.
5. **Clear path to revenue and scale** — freemium consumer protection + B2B API for
   wallets (see `PITCH_DECK_OUTLINE.md`, slide 11).
6. **Built on real expertise** — the builder is a practising on-chain security
   researcher (bug-bounty hunter with confirmed findings, author of a standing
   on-chain safety methodology). This agent encodes skills most teams would have to
   hire.
7. **Dubai-fit** — consumer protection for the world's crypto hub; multilingual
   (English/Arabic/Indonesian) for the UAE's expatriate majority and the Global South.

## 5. Alternatives considered (and rejected)

| Idea | Why rejected |
|---|---|
| Migrant-worker contract-rights agent | Strong Dubai relevance, but politically sensitive before a jury of UAE government leaders, and no domain expertise on the team. |
| Flood/disaster response agent (post-April 2024 Dubai floods) | Needs government data partnerships to demo credibly; cannot be validated solo in the build window. |
| SME tax/compliance agent (Business category) | Crowded, jurisdiction-specific, and weaker societal story for the Agent of the Year title. |
| Elderly-care companion (Personal category) | Genuine need, but hard to differentiate and hard to demo measurably in 2 minutes. |

## 6. Validation plan (Dec 2026 build window)

- **Accuracy benchmark:** 100 labelled contracts (50 known scams / rug pulls /
  honeypots, 50 legitimate) — target ≥90% correct verdicts with zero false "safe"
  verdicts on the scam set (false-safe is the failure that costs users money).
- **User testing:** 10 non-technical users attempt 3 scripted tasks (check a token,
  evaluate a suspicious link, review wallet health) — target: all 10 complete all
  tasks without assistance, and all 10 correctly refuse the planted scam.
- **Latency:** pre-sign verdict in <3 seconds (p95) — protection that is slow is
  protection users bypass.
- **Losses-prevented counter:** every blocked high-risk signature is logged (with
  user consent) as prevented exposure in USD — the headline impact metric for the
  pitch.

## 7. Risks & mitigations

| Risk | Mitigation |
|---|---|
| False "safe" verdict on a novel scam | Fail-closed design; confidence scoring; "unverified — don't proceed" default; benchmark gates zero false-safes on the labelled set. |
| Competitors (GoPlus, Blockaid) add agents | Differentiation is the consumer agentic loop + remediation + community threat graph, not the underlying signals (which AEGIS can also consume as inputs). |
| LLM API costs during judging | Prototype access must stay live until May 2027 — budget a fixed-cost tier + caching; simulated inputs clearly labelled where used. |
| Regulatory framing (financial advice) | AEGIS gives security verdicts, never investment advice; explicit disclaimer; no price predictions, no "buy/sell" guidance. |
| Winner must establish a Dubai-licensed company to receive the grant (per secondary summaries of the registration terms — unverified) | Confirm in the registration terms; if true, the grant itself funds Dubai setup — already the stated purpose of the grant. |

## 8. Sources

- FBI IC3 2025 Internet Crime Report (via FBI IC3; figures cited in biasnex.com,
  cryptowithblock.com, coindoo.com summaries, Nov 2026): USD 11.366B crypto-linked
  losses, 181,565 complaints; investment fraud USD 7.228B; victims 60+ USD 4.4B.
- Chainalysis 2026 Crypto Crime Report (Jan 2026): ≥USD 14B on-chain scam revenue
  in 2025, projected >USD 17B; impersonation +1,400%; avg scam payment USD 782 →
  USD 2,764; AI-enabled operations 4.5× revenue.
- GoPlus Security / Blockaid public product documentation (competitive baseline).
- Championship rules: see `docs/RESEARCH.md`.
