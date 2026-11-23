# RISK-003 · Insufficient LLM capability and reliability

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-003/

This risk arises when an LLM lacks sufficient capability, robustness, or reasoning performance to correctly interpret instructions, handle edge cases, or detect unsafe situations. As a result, the model may produce incorrect, misleading, or unsafe outputs that create downstream safety or security failures in systems that rely on its judgments.

- Arises from: LLM (CMP-01)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08), Misrepresentation (HZ-09)

## Controls

- CTRL-0007 (Level 0): Log all LLM inputs and outputs for regular review
- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0005 (Level 1): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0004 (Level 2): Review the LLM's system card to inform risk assessment and model selection

## Crosswalks

- owasp_asi: ASI08
- owasp_agentic_threats: T5
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2505.00212
