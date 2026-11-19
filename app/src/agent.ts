/**
 * AEGIS agent orchestrator — placeholder.
 * Full implementation starts after 9 Dec 2026 (see ../ARCHITECTURE.md §3.1).
 *
 * The loop: Understand → Plan → Act → Verify → Explain → Adapt.
 * The LLM plans and explains; deterministic code verifies. No verdict
 * ever comes from the LLM alone.
 */

export type Verdict = "SAFE" | "CAUTION" | "DANGEROUS" | "UNVERIFIED";

export interface AgentVerdict {
  verdict: Verdict;
  confidence: number; // 0..1
  summary: string; // plain-language explanation
  evidence: string[]; // tool outputs backing the verdict
}

export async function investigate(_query: string): Promise<AgentVerdict> {
  throw new Error("not implemented — build starts Dec 2026");
}
