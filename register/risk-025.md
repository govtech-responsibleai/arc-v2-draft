# RISK-025 · Generation of unqualified advice in specialised domains

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-025/

This risk arises when an agent generates advice or guidance in specialised domains such as medical, financial, or legal contexts without appropriate expertise, validation, or safeguards. As a result, users may act on incorrect or inappropriate information, leading to potential harm or adverse outcomes.

- Arises from: Multimodal Understanding and Generation (CAP-04)
- Failure mode: Agent Error
- Type: Safety
- Hazards: Compromised user safety (HZ-08)

## Controls

- CTRL-0045 (Level 1): Implement input guardrails to detect and decline requests for specialised domain advice

## Crosswalks

- owasp_asi: 
- owasp_agentic_threats: 
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2401.01301
- https://genai.owasp.org/llmrisk/llm092025-misinformation/
