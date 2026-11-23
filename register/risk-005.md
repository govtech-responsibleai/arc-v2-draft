# RISK-005 · Lack of proper role-based access control for tools

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-005/

This risk arises when tools exposed to an agent do not enforce clear, role-based access controls, allowing agents to access capabilities or resources beyond their intended responsibilities. As a result, agents may perform unauthorised actions, misuse sensitive tools, or exceed their permitted scope, increasing the likelihood of security and operational failures.

- Arises from: Tools (CMP-03)
- Failure mode: Tool or Resource Malfunction
- Type: Security
- Hazards: Identity and access management (HZ-04)

## Controls

- CTRL-0011 (Level 0): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes

## Crosswalks

- owasp_asi: ASI03
- owasp_agentic_threats: T3
- mitre_atlas: AML.T0053

## Sources

- https://embracethered.com/blog/posts/2023/chatgpt-plugin-vulns-chat-with-code/
