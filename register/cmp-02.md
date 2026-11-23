# CMP-02 · Instructions

ARC element (component), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cmp-02/

Instructions are structured inputs provided to an LLM that define the task, constraints, and context, guiding how the model interprets inputs and generates outputs. They guide the LLM's decision process by conditioning prompts and tool use with objectives, policies, and guardrails. Forms include system prompts, policies, schemas, and rubrics, varying by framework and enforcement strictness.

## Risks that arise from it

- RISK-008: Vague or underspecified instructions
- RISK-009: Unsanitised inputs in system instructions
- RISK-058: Instruction and configuration files as a way in
- RISK-067: Use of the agent by its own principal against others
