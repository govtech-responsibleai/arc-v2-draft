# RISK-026 · Generation of controversial or sensitive content

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-026/

This risk arises when an agent generates content related to sensitive or controversial topics, such as political commentary or denigrating comments about competitors. As a result, the system may create reputational, legal, or compliance issues, or be perceived as biased, inappropriate, or misrepresentative of organisational views.

- Arises from: Multimodal Understanding and Generation (CAP-04)
- Failure mode: Agent Error
- Type: Safety
- Hazards: Inappropriate content (HZ-07), Misrepresentation (HZ-09)

## Controls

- CTRL-0046 (Level 1): Implement input guardrails to detect and decline requests for controversial content that violates organisational policies

## Crosswalks

- owasp_asi: 
- owasp_agentic_threats: 
- mitre_atlas: 

## Sources

- https://news.stanford.edu/stories/2025/05/ai-models-llms-chatgpt-claude-gemini-partisan-bias-research-study
