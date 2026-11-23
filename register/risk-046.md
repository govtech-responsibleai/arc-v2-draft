# RISK-046 · System overload due to inefficient or excessive operations

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-046/

This risk arises when an agent issues poorly optimised, excessively frequent, or redundant system-level operations or queries. As a result, computing resources may be exhausted, system performance may degrade, or services may become unavailable due to unnecessary load.

- Arises from: System Management (CAP-12)
- Failure mode: Agent Error
- Type: Security
- Hazards: Infrastructure and network (HZ-03)

## Controls

- CTRL-0086 (Level 0): Limit the number of concurrent queries to external systems by agents

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T4
- mitre_atlas: 

## Sources

- https://arxiv.org/html/2407.20859v1
- https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/
