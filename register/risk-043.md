# RISK-043 · Exposure of sensitive data through file or database access

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-043/

This risk arises when an agent accesses, processes, or outputs personally identifiable or sensitive information stored in files or databases without appropriate safeguards. As a result, confidential data may be disclosed to unauthorised parties, leading to privacy breaches, regulatory non-compliance, or loss of trust.

- Arises from: File and Data Management (CAP-11)
- Failure mode: Agent Error
- Type: Security
- Hazards: Data (HZ-01)

## Controls

- CTRL-0047 (Level 0): Implement output guardrails to detect and redact personally identifiable information
- CTRL-0081 (Level 1): Implement input guardrails to detect personally identifiable information in data accessed by agents
- CTRL-0082 (Level 2): Do not grant agents access to personally identifiable or sensitive data unless strictly required

## Crosswalks

- owasp_asi: ASI02, ASI03
- owasp_agentic_threats: T2, T3
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2509.10540
- https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/
