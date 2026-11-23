# RISK-053 · Dependence on third-party agents as counterparties or delegates

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-053/

This risk arises when tasks are delegated to, or transactions conducted with, agents provided or operated by external parties — SaaS agents, partner agents reached through protocols such as A2A — whose instructions, tools, data handling, and updates are outside the organisation's control. Delegated work may be performed unsafely, data shared with the agent may be retained or reused, and behaviour can change without notice. As a result, the organisation carries the consequences of failures it cannot observe or govern directly.

- Arises from: Protocols (CMP-05) + Agent Delegation (CAP-02)
- Failure mode: Tool or Resource Malfunction
- Type: Safety, Security
- Hazards: Data (HZ-01), Compromised user safety (HZ-08)

## Controls

- CTRL-0024 (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- CTRL-0040 (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- CTRL-0025 (Level 1): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- CTRL-0026 (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- CTRL-0039 (Level 1): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- CTRL-0095 (Level 1): Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them

## Crosswalks

- owasp_asi: ASI04, ASI07
- owasp_agentic_threats: T13
- mitre_atlas: 

## Sources

- https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
- https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
