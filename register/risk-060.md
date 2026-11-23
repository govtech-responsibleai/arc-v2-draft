# RISK-060 · Agent credentials that are over-broad, long-lived, or outlive their use

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/

This risk arises when the identities and credentials that agents use are broader than the task needs, do not expire, are stored where other software can read them, or stay valid after the agent, the integration, or the vendor relationship has ended. Agents, and the platforms and vendors that act for them, accumulate tokens for many systems, and a single theft then opens all of them. As a result, a compromise of an agent, of a developer's machine, or of an agent vendor gives an attacker standing access to the organisation's systems, as when stolen tokens belonging to a sales chat agent were used to pull data from hundreds of its customers' environments, a breach at an agent-integration platform exposed more than ten thousand credentials held for customers' agents, and a software release was hijacked through an agent-platform key that had never been revoked.

- Arises from: Roles and Access Controls (DSN-02)
- Failure mode: Safeguard Failure
- Type: Security
- Hazards: Data (HZ-01), Identity and access management (HZ-04)

## Controls

- CTRL-0011 (Level 0): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes
- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0030 (Level 1): Assign each agent a unique, verifiable identity with no shared credentials
- CTRL-0102 (Level 1): Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired

## Crosswalks

- owasp_asi: ASI03
- owasp_agentic_threats: T3, T9
- mitre_atlas: AML.T0055, AML.T0083, AML.T0091.000

## Sources

- https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift
- https://composio.dev/blog/composio-may-2026-security-incident
- https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain
- https://vercel.com/kb/bulletin/vercel-april-2026-security-incident
