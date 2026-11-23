# RISK-028 · Generation of non-factual or hallucinated content

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-028/

This risk arises when an agent generates information that is inaccurate, fabricated, or unsupported by evidence while presenting it as factual. As a result, users may be misled, make incorrect decisions, or lose trust in the system’s outputs.

- Arises from: Multimodal Understanding and Generation (CAP-04)
- Failure mode: Agent Error
- Type: Safety
- Hazards: Compromised user safety (HZ-08), Misrepresentation (HZ-09)

## Controls

- CTRL-0049 (Level 0): Implement UI/UX cues to communicate the risk of hallucination to users
- CTRL-0050 (Level 1): Implement features enabling users to verify generated answers against source content
- CTRL-0048 (Level 2): Implement methods to reduce hallucination rates in agent outputs

## Crosswalks

- owasp_asi: ASI08
- owasp_agentic_threats: T5
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2309.01219
