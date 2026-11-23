# RISK-024 · Generation of undesirable content

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-024/

This risk arises when an agent generates text, images, audio, or other media that contain toxic, hateful, sexual, or otherwise inappropriate content. As a result, the system may cause harm to users, violate organisational standards or regulations, or undermine trust in the system’s outputs.

- Arises from: Multimodal Understanding and Generation (CAP-04)
- Failure mode: Agent Error
- Type: Safety
- Hazards: Discriminatory or hateful content (HZ-06), Inappropriate content (HZ-07)

## Controls

- CTRL-0044 (Level 1): Implement output safety guardrails to detect and prevent generation of undesirable content

## Crosswalks

- owasp_asi: 
- owasp_agentic_threats: 
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2402.04249v2
