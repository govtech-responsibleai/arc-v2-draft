# DSN-01 · Agentic Architecture

ARC element (design), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/dsn-01/

The agentic architecture defines how an agentic system's control flow is structured: the loop through which a single agent plans, acts, and observes, and, where there are several agents, how they are structured, interconnected, and coordinated to collectively perform tasks that exceed the capabilities of a single agent. This includes orchestration patterns such as hierarchical delegation, parallel agent execution, sequential handoffs between specialised agents, shared or centralized planning components, and the communication protocols that govern information exchange and coordination across the system. Risks specific to multiple agents apply only to systems with the Agent Delegation capability.

## Risks that arise from it

- RISK-012: Cascading errors in multi-agent architectures
- RISK-013: Man-in-the-middle attacks between agents
- RISK-014: Feedback loops and runaway agent behaviour
- RISK-051: Unsanctioned coordination between agents
