# CMP-04 · Memory

ARC element (component), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cmp-04/

Memory is a persistent or semi-persistent data store attached to an LLM that retains information across interactions—such as conversation history, user preferences, task state, and retrieved knowledge—enabling continuity, long-horizon reasoning, and personalization in agentic workflows. Memory may be implemented through mechanisms such as context windows, vector databases, episodic logs, or external state stores, each offering different trade-offs in latency, fidelity, and persistence. Every agent has working memory, the context it carries within a task; a system has persistent memory when it keeps information beyond a single session or shares it across users or tasks.

Conditional: present when The system keeps information beyond a single session, or shares it across users or tasks.

## Risks that arise from it

- RISK-010: Poisoned memory
- RISK-011: Sensitive data leakage across memory contexts
