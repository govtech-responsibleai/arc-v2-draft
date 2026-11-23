# RISK-047 · Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/

This risk arises when an agent that takes in untrusted content (web pages, files, inbound email, chat, support tickets, form submissions, or API responses) also holds access to sensitive data and has any outbound channel, such as browsing, API calls, messages, or tool calls that carry data in URLs. Instructions injected through the content can then direct the agent to send data out through a legitimate channel, for example by fetching an attacker's URL with data in it, by replying or forwarding to an attacker's address, or by posting to a shared channel. Each capability may be individually controlled; the exposure comes from their combination, and the way in and the way out can be the same channel. As a result, confidential data can leave the organisation without any single control being bypassed, as demonstrated by EchoLeak, where a single crafted email led Microsoft 365 Copilot to send internal data to an attacker, and ForcedLeak, where instructions in a web-form submission led Salesforce Agentforce to exfiltrate CRM records.

- Arises from: the Lethal trifecta combination rule (lethal-trifecta): roles untrusted-content, sensitive-data, outbound-channel
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01)

## Controls

- CTRL-0062 (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- CTRL-0083 (Level 0): Disallow unknown or external files unless they have been scanned for threats
- CTRL-0089 (Level 0): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- CTRL-0097 (Level 0): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent
- CTRL-0060 (Level 1): Implement escape filtering before incorporating web content into prompts
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- CTRL-0020 (Level 2): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- CTRL-0082 (Level 2): Do not grant agents access to personally identifiable or sensitive data unless strictly required

## Crosswalks

- owasp_asi: ASI01, ASI02
- owasp_agentic_threats: T6, T2
- mitre_atlas: AML.T0051.001, AML.T0078, AML.T0085, AML.T0086, AML.T0077

## Sources

- https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- https://www.varonis.com/blog/forcedleak
- https://arxiv.org/abs/2509.10540
- https://www.anthropic.com/engineering/how-we-contain-claude
- https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf
