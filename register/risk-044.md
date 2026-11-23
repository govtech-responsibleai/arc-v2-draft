# RISK-044 · Prompt injection via malicious files or data

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/

This risk arises when an agent ingests or processes maliciously crafted files or data that embed hidden instructions or manipulative content. As a result, the agent may follow unintended prompts, alter its behaviour, or execute actions that compromise system safety or integrity.

- Arises from: File and Data Management (CAP-11)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0062 (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- CTRL-0083 (Level 0): Disallow unknown or external files unless they have been scanned for threats
- CTRL-0097 (Level 0): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

## Crosswalks

- owasp_asi: ASI01, ASI06
- owasp_agentic_threats: T6, T1
- mitre_atlas: AML.T0051.001, AML.T0099, AML.T0070

## Sources

- https://arxiv.org/abs/2509.10540
- https://arxiv.org/abs/2403.02817
