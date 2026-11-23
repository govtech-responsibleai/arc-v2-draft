# RISK-020 · Generating plans that overlook safety implications

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-020/

This risk arises when an agent generates plans or goals without adequately considering basic safety, security, or practical constraints that would be apparent to a human. As a result, the system may propose or pursue actions that are unsafe, insecure, or inappropriate despite being technically feasible.

- Arises from: Planning and Goal Management (CAP-01)
- Failure mode: Agent Error
- Type: Safety
- Hazards: Compromised user safety (HZ-08)

## Controls

- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0037 (Level 1): Require planning agents to include explicit safety constraints in all generated plans before execution
- CTRL-0039 (Level 1): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0035 (Level 2): Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding

## Crosswalks

- owasp_asi: ASI10, ASI01
- owasp_agentic_threats: T7
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2412.13178
- https://arxiv.org/abs/2412.14470
