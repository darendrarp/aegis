# AEGIS app — skeleton

Full build starts after 9 December 2026 (see `../ARCHITECTURE.md` for the plan).

Target layout:

```
src/
  agent/       orchestrator, verdict engine, tools
  chain/       RPC client, transaction simulator, audit engine
  intel/       threat-intel clients, threat graph
  components/  chat UI, verdict cards, wallet health
  app/         Next.js pages + API routes
```
