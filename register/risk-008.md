# RISK-008 · Vague or underspecified instructions

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-008/

This risk arises when instructions provided to an LLM are ambiguous, incomplete, or poorly scoped, leading the model to make unintended assumptions when interpreting tasks or constraints. As a result, the LLM may behave unpredictably, bypass safeguards, or take actions that introduce safety or security risks.

- Arises from: Instructions (CMP-02)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0016 (Level 0): Define clearly the agent's role, scope, and non-goals in the system prompt
- CTRL-0017 (Level 1): Define clear success criteria for the agent's tasks
- CTRL-0018 (Level 2): Define default behaviour when the agent encounters ambiguous situations

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2502.13295
- https://arxiv.org/abs/2505.13360v1
