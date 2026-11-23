# RISK-036 · Prompt injection risks through computer use

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-036/

This risk arises when an agent interacts with graphical user interfaces that display untrusted or adversarial content - such as web pages, documents, pop-ups, or form fields - crafted to embed hidden instructions or manipulative cues. As a result, the agent may misinterpret on-screen text as authoritative guidance, follow injected instructions, or perform unintended actions while operating the interface.

- Arises from: Computer Use (CAP-08)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0062 (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0064 (Level 1): Limit computer use to accessing only safe and trusted resources
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: AML.T0100, AML.T0051.001

## Sources

- https://arxiv.org/html/2505.13076v1
- https://hiddenlayer.com/innovation-hub/indirect-prompt-injection-of-claude-computer-use/
