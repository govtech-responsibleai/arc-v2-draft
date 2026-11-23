# RISK-034 · Prompt injection via malicious websites

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/

This risk arises when an agent retrieves or processes content from malicious or untrusted websites that are designed to inject instructions or manipulative prompts into the system. As a result, the agent may follow unintended commands, override intended constraints, or take actions that compromise system behaviour or integrity.

- Arises from: Internet and Search Access (CAP-07)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0062 (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- CTRL-0060 (Level 1): Implement escape filtering before incorporating web content into prompts
- CTRL-0061 (Level 1): Use structured retrieval APIs for web searches rather than web scraping
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: AML.T0051.001, AML.T0078

## Sources

- https://unit42.paloaltonetworks.com/agentic-ai-threats/
