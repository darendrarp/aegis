# AEGIS — Pitch Deck Outline (14 slides)

> Championship requirement: 12–15 slides covering business concept, problem and
> solution, customers and market, working agent, technical architecture, performance,
> validation, competitors, revenue model, go-to-market plan, roadmap and team.
> **The 2-minute demo video must be embedded in Slide 4.** All figures must be
> re-verified against primary sources at build time; sources are noted per slide.

## Slide 1 — Title
- **AEGIS — Your AI Bodyguard for Web3**
- Subtitle: *An autonomous guardian agent that stops crypto scams before money moves.*
- Category: Best Societal AI Agent · Create AI Agents Championship
- Presenter name + one-line credential (on-chain security researcher)
- Visual: shield mark + a single blocked-scam alert.

## Slide 2 — The Problem
- Headline stat: **USD 17B lost to crypto scams in 2025** (Chainalysis 2026 Crypto
  Crime Report); USD 11.4B reported in the US alone (FBI IC3 2025).
- Victims over 60 lost USD 4.4B — the hardest-hit group. Average scam payment up
  253% in one year. Impersonation scams up 1,400%.
- The structural fact: blockchain transactions are **irreversible** — no chargeback,
  no fraud department. Prevention is the only intervention.
- Scammers already use AI (4.5× more profitable per AI-enabled campaign). Victims
  defend themselves with a warning popup.
- *Source footnotes on-slide (FBI IC3 2025; Chainalysis 2026).*

## Slide 3 — The Solution: AEGIS
- An autonomous agent, not a scanner: **Understand → Plan → Act → Adapt**.
- Three things it does that nothing else does together:
  1. Explains risk in plain language anyone understands.
  2. Simulates every transaction *before* signing and blocks the dangerous ones.
  3. Acts — revokes dangerous approvals, quarantines scam tokens, and shares every
     verified scam across the whole network instantly.
- One screenshot: the chat verdict card ("Don't sign — here's why").

## Slide 4 — Demo (2-minute video embedded here)
- **Embed the 2-minute demo video on this slide** (championship requirement).
- Caption under the video: what judges just saw — a real scam blocked, a signature
  saved, a wallet cleaned, the network effect.
- Live prototype link + test credentials in speaker notes / footer.

## Slide 5 — How It Works (Product Tour)
- The four capabilities, one row each with a screenshot:
  Pre-sign Guardian · Token & Contract Audit · Wallet Health Check · 24/7 Watchtower.
- The user journey: paste a link / connect a wallet → agent investigates → verdict
  in plain language → one-tap fix.
- Multilingual at launch: English, Arabic, Indonesian.

## Slide 6 — Technical Architecture
- Diagram (see `ARCHITECTURE.md`): chat UI → orchestrator → tools (simulator, audit
  engine, threat intel, watchtower) → threat graph.
- The trust principle: **the LLM plans and explains; deterministic code verifies.**
  No verdict ever comes from the LLM alone.
- Safety by construction: no keys held, read-only by default, user signs every
  remediation, fail-closed verdicts.

## Slide 7 — Performance (measured, not claimed)
- Benchmark results from the eval harness (fill in during build; targets):
  - 100 labelled contracts: ≥90% correct verdicts, **zero false-SAFE on scams**.
  - Pre-sign verdict latency: <3s (p95).
  - Watchtower detection: <60s from on-chain event to alert.
- Live counter: USD value of prevented exposure logged by the prototype.
- *Rule: no number on this slide without a reproducible benchmark behind it.*

## Slide 8 — Validation
- User testing: 10 non-technical users, 3 scripted tasks each — all completed
  unassisted; all correctly refused the planted scam (fill in real results).
- Quotes from test users (1–2 lines, anonymised).
- Early signal: waitlist/community sign-ups, wallets scanned in testing (real
  numbers only).

## Slide 9 — Market & Customers
- ~560M crypto owners worldwide (Triple-A 2024); the vast majority have no
  protection tooling.
- Primary: retail users who cannot read a contract — newcomers, elderly, remittance
  senders, emerging-market users.
- Secondary (B2B): wallets, exchanges, fintech apps that need a user-protection layer.
- Dubai/UAE angle: a global crypto hub with a large expatriate population; consumer
  protection is core to the UAE's regulated-crypto narrative (VARA).

## Slide 10 — Competition
- Table: GoPlus, Blockaid, Wallet Guard, CertiK Skynet vs AEGIS across: consumer
  chat UX · autonomous remediation · plain-language explanation · community threat
  graph · multilingual.
- Honest positioning: incumbents are strong **infrastructure** (and AEGIS consumes
  their signals as inputs); nobody owns the **consumer agentic protection** layer.
  AEGIS competes on the loop — investigate, act, learn — not on raw signals.

## Slide 11 — Revenue Model & Sustainability
- **Freemium consumer (B2C):** free wallet health checks + basic scam checks;
  **AEGIS Plus USD 5/month** (or USD 50/year): 24/7 Watchtower, unlimited deep
  audits, priority alerts, family protection (up to 5 wallets).
- **B2B API (primary revenue engine):** wallets/exchanges embed AEGIS verdicts —
  tiered by volume (e.g. USD 0.01–0.03 per check at scale, monthly minimums);
  white-label available. First targets: mid-size wallets and regional exchanges
  that cannot build this in-house.
- **Trust & Safety services (later):** scam-incident reports for insurers and
  consumer-protection bodies; anonymised threat-intelligence feeds.
- **Unit economics (illustrative, to be validated):** marginal cost per check
  <USD 0.005 at cache-hit rates >70%; Plus gross margin >80%.
- **Sustainability:** grant funds the build-out to a fully functional agent and
  Dubai establishment (per championship terms); revenue from B2B API from year 1;
  path to break-even on B2B alone by end of year 2 (model assumptions documented in
  speaker notes — no invented traction).
- **What the USD 150,000 grant funds:** engineering to Grand-Final-ready live agent
  (40%), threat-graph + intel partnerships (20%), user acquisition & community
  (20%), Dubai company setup & operations (20%).

## Slide 12 — Go-To-Market
- Phase 1 (Dec 2026–May 2027): championship visibility; free consumer launch;
  crypto-community partnerships (Indonesian + UAE communities first — the builder's
  home networks); "scam of the week" public reports build the brand.
- Phase 2 (2027): B2B pilot with 2–3 mid-size wallets (warm intros via championship
  network + accelerator mentors).
- Phase 3: regional expansion — MENA and Southeast Asia, where scam victimisation is
  highest and protection tooling is thinnest.
- Growth loop: every scam reported makes the product better for everyone — the
  threat graph is the moat and the marketing.

## Slide 13 — Roadmap
- **Dec 2026:** MVP submitted — BNB Chain + Ethereum, chat guardian, wallet health.
- **Q1 2027:** Watchtower live, threat graph public beta, Arabic + Indonesian UX.
- **Q2 2027 (Grand Final):** fully functional live agent on stage; Base + Polygon.
- **H2 2027:** B2B API general availability; first paying wallet partners; Solana.
- **2028:** insurer/consumer-body intelligence products; 1M protected wallets target.

## Slide 14 — Team & Ask
- Solo founder-builder: practising on-chain security researcher — bug-bounty hunter
  with confirmed findings (incl. paid rewards), author of a standing on-chain safety
  methodology, builder of production agent systems.
- Why solo works here: the agent *is* the team — one expert's security judgement,
  encoded and scaled to millions of users.
- **The ask:** USD 150,000 grant + the championship's accelerator and mentorship —
  to turn a working guardian into the consumer protection layer for Web3, built in
  Dubai, for the world.
- Contact + prototype link + repo link.

---

## Design notes
- 16:9, dark theme with a shield motif; maximum one key stat per slide; every claim
  footnoted to its source.
- The deck must work **without** the presenter (judges read it async) — full
  sentences in slide notes, not just presenter memory.
- Demo video embedded in Slide 4; the same video plays inside the 6-minute pitch
  video (see `VIDEO_SCRIPTS.md`).
