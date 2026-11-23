# RISK-055 · Data exfiltration through message and API channels

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-055/

Retired: replaced by RISK-047 (https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/).

This risk arises when an agent that reads messages or data sent by outside parties through a programmatic channel — email, chat, support tickets, form submissions, webhooks, or API responses — also holds access to sensitive data and can send messages or make API calls outward. Instructions injected in an inbound message can then direct the agent to send data out through a legitimate channel: replying or forwarding to an attacker's address, posting to a shared channel, or calling an API with data in its parameters or in a URL. Unlike RISK-047, no web access is needed, because the message channel is both the way in and the way out. As a result, confidential data can leave the organisation without any single control being bypassed, as demonstrated by EchoLeak, where a single crafted email led Microsoft 365 Copilot to send internal data to an attacker, and ForcedLeak, where instructions in a web-form submission led Salesforce Agentforce to exfiltrate CRM records.

- Arises from: Other Programmatic Interfaces (CAP-09) + File and Data Management (CAP-11)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01)

## Crosswalks

- owasp_asi: ASI01, ASI02
- owasp_agentic_threats: T6, T2

## Sources

- https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf
- https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- https://www.hackthebox.com/blog/cve-2025-32711-echoleak-copilot-vulnerability
- https://www.varonis.com/blog/forcedleak
