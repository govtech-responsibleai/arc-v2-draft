# RISK-004 · Weak tool authentication and authorisation controls

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-004/

This risk arises when tools connected to an agent lack robust authentication or fine-grained authorisation mechanisms, allowing unauthorised access or misuse of tool capabilities. As a result, attackers or misbehaving agents may compromise the system by invoking sensitive actions, escalating privileges, or manipulating external resources beyond intended boundaries.

- Arises from: Tools (CMP-03)
- Failure mode: Tool or Resource Malfunction
- Type: Security
- Hazards: Application (HZ-02), Identity and access management (HZ-04)

## Controls

- CTRL-0009 (Level 0): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- CTRL-0032 (Level 0): Centralise observability data collection in a unified backend system

## Crosswalks

- owasp_asi: ASI03, ASI02
- owasp_agentic_threats: T3, T2
- mitre_atlas: AML.T0053, AML.T0091.000

## Sources

- https://arxiv.org/abs/2504.08623
- https://arxiv.org/abs/2505.14590
- https://www.redhat.com/en/blog/model-context-protocol-mcp-understanding-security-risks-and-controls
