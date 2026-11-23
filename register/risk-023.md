# RISK-023 · Incorrect tool selection or misuse

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-023/

This risk arises when an agent selects an inappropriate tool or applies a tool incorrectly for a given task or action. As a result, the agent may produce erroneous outcomes, fail to complete the task effectively, or trigger unintended side effects due to misuse of tool capabilities.

- Arises from: Tool Use (CAP-03)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0041 (Level 0): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0043 (Level 1): Log all tool selection decisions and invocations with comprehensive metadata

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2411.13547
