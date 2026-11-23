# RISK-054 · Insecure default configuration of agent frameworks and runtimes

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/

This risk arises when the frameworks and runtimes an agent is built on ship with insecure defaults — authentication disabled, services listening on all interfaces, permissive origin checks on local control channels, unsafe deserialisation of persisted state, or default credentials — and deployers inherit them unchanged. As a result, any reachable attacker can drive the agent and use the credentials and tools it holds, as shown by a one-click remote-code-execution flaw in a widely installed open-source agent and a chain of deserialisation flaws in agent orchestration frameworks.

- Arises from: Roles and Access Controls (DSN-02)
- Failure mode: Tool or Resource Malfunction
- Type: Security
- Hazards: Infrastructure and network (HZ-03), Identity and access management (HZ-04)

## Controls

- CTRL-0009 (Level 0): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- CTRL-0096 (Level 0): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly

## Crosswalks

- owasp_asi: ASI03, ASI05
- owasp_agentic_threats: T3, T11
- mitre_atlas: AML.T0132, AML.T0049, AML.T0083

## Sources

- https://thehackernews.com/2026/06/langgraph-flaw-chain-exposes-self.html
- https://nvd.nist.gov/vuln/detail/CVE-2026-25253
- https://github.com/advisories/GHSA-g48c-2wqr-h844
