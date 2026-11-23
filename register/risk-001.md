# RISK-001 · Use of untrusted or compromised LLMs

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/

This risk arises when LLMs obtained from untrusted or insufficiently vetted sources have been intentionally poisoned or backdoored during training or distribution, causing them to behave maliciously or unpredictably under specific conditions. Such models may leak sensitive information, bypass safeguards, or execute hidden behaviors that undermine system integrity and trust.

- Arises from: LLM (CMP-01)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0001 (Level 0): Use only LLMs from verified and trusted model developers
- CTRL-0002 (Level 0): Obtain legally binding no-training and no-logging agreements from LLM API service providers
- CTRL-0007 (Level 0): Log all LLM inputs and outputs for regular review
- CTRL-0003 (Level 1): Use only established and verified model loaders in production environments
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions

## Crosswalks

- owasp_asi: ASI04
- owasp_agentic_threats: T17
- mitre_atlas: AML.T0010.003, AML.T0115.001, AML.T0018.000, AML.T0020

## Sources

- https://arxiv.org/abs/2408.02946v6
