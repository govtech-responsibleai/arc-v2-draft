# CMP-03 · Tools

ARC element (component), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cmp-03/

Tools are external functions, APIs, or resources attached to an LLM that extend its capabilities beyond text generation, enabling it to retrieve information, execute actions, and affect external systems (e.g., search, code execution, database queries, or file manipulation), typically through structured interfaces such as the Model Context Protocol (MCP) that constrain invocation, inputs, permissions, and outputs for agentic control and safety.

## Risks that arise from it

- RISK-004: Weak tool authentication and authorisation controls
- RISK-005: Lack of proper role-based access control for tools
- RISK-007: Lack of input sanitisation
- RISK-048: Compromise through the tool, skill, and dependency supply chain
