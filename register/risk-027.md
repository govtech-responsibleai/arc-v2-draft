# RISK-027 · Regurgitating personally identifiable information

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-027/

This risk arises when an agent reproduces personally identifiable information in its generated outputs, whether drawn from training data, memory, or prior interactions. As a result, the system may violate privacy obligations, expose individuals to harm, or breach data protection requirements.

- Arises from: Multimodal Understanding and Generation (CAP-04)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Data (HZ-01), Compromised user safety (HZ-08)

## Controls

- CTRL-0047 (Level 0): Implement output guardrails to detect and redact personally identifiable information

## Crosswalks

- owasp_asi: ASI06
- owasp_agentic_threats: T1
- mitre_atlas: 

## Sources

- https://www.edpb.europa.eu/system/files/2025-04/ai-privacy-risks-and-mitigations-in-llms.pdf
