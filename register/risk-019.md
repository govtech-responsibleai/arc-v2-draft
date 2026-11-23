# RISK-019 · Generating plans that fail to meet the user's requirements

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-019/

This risk arises when an agent generates plans or goals that do not accurately reflect the user’s stated objectives, constraints, or preferences. As a result, the system may pursue incorrect or suboptimal actions, waste resources, or deliver outcomes that do not satisfy user expectations.

- Arises from: Planning and Goal Management (CAP-01)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0036 (Level 1): Regularly evaluate and test planning behaviour under representative workloads and failure scenarios
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0035 (Level 2): Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: 

## Sources

- https://arxiv.org/pdf/2402.01622v4
- https://aclanthology.org/2025.naacl-long.93.pdf
