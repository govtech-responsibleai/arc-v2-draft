# CMP-05 · Protocols

ARC element (component), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cmp-05/

Protocols are the standard interfaces through which an agentic system connects to tools, services, and agents that another party builds or operates, such as the Model Context Protocol (MCP) for tool servers and agent-to-agent protocols such as A2A. A protocol governs how the other party is discovered, how it is identified and authenticated, what it declares about itself to the agent (tool descriptions, capability lists, agent cards), and how requests and results pass between the two. A system has this component when it makes at least one such connection, in either direction: its agents reach another party's tool server or agent, or another party's agents reach it. A function or API wrapper that the system's own team writes is a tool, not a protocol connection, because the team controls the description the agent sees.

Conditional: present when At least one tool server or agent that another party builds or operates is connected to the system through an agent protocol such as MCP or A2A, in either direction.

## Risks that arise from it

- RISK-006: Tool poisoning by malicious actors
- RISK-053: Dependence on third-party agents as counterparties or delegates
- RISK-064: Harm from a connected tool server or agent to the system that connects to it
