# RISK-013 · Man-in-the-middle attacks between agents

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-013/

This risk arises when communication channels between agents are insufficiently secured, allowing an attacker to intercept, modify, or replay messages exchanged within the agentic system. As a result, agents may act on tampered information, leading to incorrect coordination, unauthorised actions, or compromised system behaviour.

- Arises from: Agentic Architecture (DSN-01) + Agent Delegation (CAP-02)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01), Infrastructure and network (HZ-03)

## Controls

- CTRL-0026 (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- CTRL-0027 (Level 1): Implement circuit breakers to prevent cascading failures in multi-agent systems

## Crosswalks

- owasp_asi: ASI07
- owasp_agentic_threats: T12, T9
- mitre_atlas: AML.T0073

## Sources

- https://arxiv.org/pdf/2502.14847
