# AEGIS — Your AI Bodyguard for Web3

> **Entry for the Dubai Create AI Agents Championship — Best Societal AI Agent.**
> An autonomous guardian agent that stops crypto scams *before* money moves.

Crypto scams stole an estimated **USD 17 billion in 2025** (Chainalysis). The victims
are mostly ordinary people — first-time users, retirees, migrant workers — and
blockchain transactions are irreversible: there is no chargeback, no fraud
department, no undo button. Scammers already use AI. AEGIS gives the defence an
agent too.

AEGIS is an **agent, not a scanner**. It understands a user's goal in plain language,
plans a multi-step investigation, executes real checks against live chain data,
**acts** on the findings (blocks dangerous signatures, revokes risky approvals,
shares verified scams across the whole network), and learns from every case.

## What it does

| Capability | Description |
|---|---|
| **Pre-sign Guardian** | Simulates any transaction before signing and explains what it really does — in plain language. |
| **Token & Contract Audit** | Honeypot, hidden mint, owner powers, liquidity — verdicts a non-technical user understands. |
| **Wallet Health Check** | Finds dangerous open approvals and poisoned tokens, with one-tap fixes. |
| **Scam Link & Message Check** | Phishing / impersonation / fake-airdrop verdicts in seconds. |
| **24/7 Watchtower** | Monitors subscribed wallets and alerts on new risks. |
| **Threat Graph** | Community-reported scams, agent-verified, shared across all users in real time. |

## Safety by construction

- **Never holds keys, never moves funds.** The agent is read-only; every remediation
  is prepared, previewed in plain language, and signed by the user in their own wallet.
- **Fail closed.** If AEGIS cannot verify something is safe, it says so — never a
  false green light.
- **The LLM plans and explains; deterministic code verifies.** No verdict ever comes
  from the LLM alone.

## Status

🚧 **Preparation phase (Nov 2026).** Concept, architecture, pitch outline, and video
scripts are complete. Full build starts after 9 December 2026; submission deadline
is **4 January 2027, 11:59 AM GST (14:59 WIB)**.

## Docs

- [`CONCEPT.md`](CONCEPT.md) — problem, solution, users, why it wins, validation plan
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — stack, agent components, demo flow, build plan
- [`PITCH_DECK_OUTLINE.md`](PITCH_DECK_OUTLINE.md) — 14-slide deck outline + revenue model
- [`VIDEO_SCRIPTS.md`](VIDEO_SCRIPTS.md) — 2-minute demo + 6-minute pitch scripts
- [`docs/RESEARCH.md`](docs/RESEARCH.md) — verified championship rules, dates & sources

## Repo layout (target)

```
app/     Next.js frontend + agent backend (build starts Dec 2026)
eval/    Labelled benchmark dataset + evaluation harness
docs/    Research & verification notes
```

## License

MIT — see [`LICENSE`](LICENSE).
