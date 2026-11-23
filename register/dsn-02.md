# DSN-02 · Roles and Access Controls

ARC element (design), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/dsn-02/

Roles and access controls define and enforce differentiated roles, permissions, and scopes of authority across agents and system components, specifying what actions each agent is allowed to perform and which resources it may access. This includes assigning functional roles to agents, configuring tool- and data-level permissions, scoping credentials or identities, and enforcing access policies that govern interactions with files, systems, services, or other agents.

## Risks that arise from it

- RISK-015: Overly permissive roles and permissions
- RISK-016: Unauthorised privilege escalation
- RISK-049: Escape from evaluation or sandbox containment onto live systems
- RISK-054: Insecure default configuration of agent frameworks and runtimes
- RISK-060: Agent credentials that are over-broad, long-lived, or outlive their use
- RISK-065: Instructions or approvals forged in the principal's name
