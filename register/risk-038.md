# RISK-038 · Incorrect use of unfamiliar programmatic interfaces

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-038/

This risk arises when an agent interacts with programmatic interfaces it has not been trained or configured to use correctly, particularly bespoke or non-standard interfaces outside established protocols such as MCP servers. As a result, the agent may misinterpret interface semantics, invoke operations incorrectly, or produce unintended effects due to improper integration or usage.

- Arises from: Other Programmatic Interfaces (CAP-09)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0041 (Level 0): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- CTRL-0067 (Level 0): Ensure proper documentation of programmatic interfaces for agent use

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2305.15334
- https://arxiv.org/abs/2309.15817
