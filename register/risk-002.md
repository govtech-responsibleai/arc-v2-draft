# RISK-002 · Insufficient alignment of LLM behaviour

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-002/

This risk arises when an LLM's learned objectives and behaviors do not reliably align with intended user goals, system instructions, or organizational policies, leading to inappropriate, unsafe, or undesired outputs. Misalignment may surface as failure to follow constraints, inconsistent reasoning, or behavior that diverges from expected norms in edge cases or complex scenarios.

- Arises from: LLM (CMP-01)
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Application (HZ-02), Inappropriate content (HZ-07), Compromised user safety (HZ-08)

## Controls

- CTRL-0007 (Level 0): Log all LLM inputs and outputs for regular review
- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0005 (Level 1): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- CTRL-0008 (Level 1): Implement automated alerts when agent behaviour drifts from predefined thresholds
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0004 (Level 2): Review the LLM's system card to inform risk assessment and model selection

## Crosswalks

- owasp_asi: ASI10
- owasp_agentic_threats: T7
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2406.10162
