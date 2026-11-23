# RISK-006 · Tool poisoning by malicious actors

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-006/

This risk arises when a tool server or agent that another party builds or operates describes itself in a way that manipulates the agent that connects to it. Instructions can be hidden in tool descriptions, parameter schemas, or agent cards; a tool can imitate or shadow a trusted one; and a definition can change after it was approved. The agent reads these descriptions as part of its instructions, so it may follow them even when the tool is never called. As a result, the agent may unknowingly execute malicious actions, leak sensitive information, or produce manipulated outputs that undermine system integrity and trust.

- Arises from: Protocols (CMP-05)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0013 (Level 0): Test all untested MCP servers in a sandboxed environment before deploying to production
- CTRL-0091 (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- CTRL-0015 (Level 1): Treat all tool metadata and outputs as untrusted input requiring validation

## Crosswalks

- owasp_asi: ASI04, ASI02
- owasp_agentic_threats: T17, T2
- mitre_atlas: AML.T0110, AML.T0011.002

## Sources

- https://embracethered.com/blog/posts/2025/model-context-protocol-security-risks-and-exploits/
- https://arxiv.org/abs/2508.14925
