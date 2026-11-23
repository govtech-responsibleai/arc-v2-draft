# RISK-021 · Incorrect task delegation between agents

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-021/

This risk arises when an agent assigns tasks to other agents that do not match their capabilities, roles, or access permissions. As a result, tasks may be executed incorrectly, fail to complete, or introduce security and operational issues due to inappropriate delegation.

- Arises from: Agent Delegation (CAP-02)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Identity and access management (HZ-04), Compromised user safety (HZ-08)

## Controls

- CTRL-0040 (Level 0): Limit the scope of agent actions through predefined thresholds and baselines

## Crosswalks

- owasp_asi: ASI03, ASI08
- owasp_agentic_threats: T3
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2503.13657
