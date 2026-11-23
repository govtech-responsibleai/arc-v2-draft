# RISK-012 · Cascading errors in multi-agent architectures

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-012/

This risk arises when errors or misjudgements produced by one agent propagate through interconnected agents within a multi-agent system. As a result, small failures may compound across agent interactions, leading to amplified errors, degraded system performance, or unintended outcomes at the system level.

- Arises from: Agentic Architecture (DSN-01) + Agent Delegation (CAP-02)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0024 (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- CTRL-0028 (Level 0): Continuously monitor multi-agent systems for cascade failure indicators
- CTRL-0025 (Level 1): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- CTRL-0027 (Level 1): Implement circuit breakers to prevent cascading failures in multi-agent systems

## Crosswalks

- owasp_asi: ASI08
- owasp_agentic_threats: T5
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2408.00989v3
- https://arxiv.org/pdf/2502.19145
