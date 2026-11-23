# RISK-042 · Database overload due to inefficient data operations

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-042/

This risk arises when an agent issues poorly optimised, excessively frequent, or redundant queries against databases or data stores. As a result, system performance may degrade, resources may be exhausted, or critical services may become unavailable due to unnecessary load.

- Arises from: File and Data Management (CAP-11)
- Failure mode: Agent Error
- Type: Security
- Hazards: Infrastructure and network (HZ-03)

## Controls

- CTRL-0078 (Level 0): Enforce throttling or rate limits on agent-initiated database operations
- CTRL-0079 (Level 2): Validate agent-generated database queries for efficiency before execution against production databases
- CTRL-0080 (Level 2): Implement caching mechanisms to reduce repetitive database queries by agents

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T4
- mitre_atlas: 

## Sources

- https://www.tinybird.co/blog-posts/which-llm-writes-the-best-sql
- https://arxiv.org/abs/2305.03111
- https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/
