# RISK-009 · Unsanitised inputs in system instructions

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-009/

This risk arises when untrusted or user-controlled inputs are incorporated into system instructions without proper sanitisation or validation. As a result, malicious or malformed content may manipulate the model's behaviour, override intended constraints, or trigger unintended actions.

- Arises from: Instructions (CMP-02)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0019 (Level 0): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- CTRL-0020 (Level 2): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: AML.T0051

## Sources

- https://arxiv.org/abs/2502.15851v1
- https://aclanthology.org/2025.naacl-long.425.pdf
