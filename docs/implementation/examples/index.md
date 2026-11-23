---
description: "Three worked examples of an ARC assessment: an agentic fact checker, a coding assistant and a call assistant."
---

# Worked examples

Each example takes one agentic system through the [four steps for AI developers](../for-ai-developers.md): identify its capabilities, evaluate the risks, implement the controls, and assess the residual risk. To see what applies to a system of your own, use [What applies to my system?](https://govtech-responsibleai.github.io/arc-v2-draft/explorer/).

## [Agentic Fact Checker](fact-checker.md)

Fact-checking is a time-consuming process requiring deep analysis of claims, evidence, and their sufficiency. Our colleagues in the AI Practice recently developed an agentic fact-checking system (read their [Agentic AI Primer](https://playbooks.aip.gov.sg/agentic-ai-primer/09_applications_for_singapore_govt/) for details), using a complex multi-agent architecture to validate the veracity of any claim.

## [Agentic Coding Assistant](coding-assistant.md)

Agentic coding assistants like Cursor and Claude Code help developers write, debug, and refactor code by autonomously reading codebases, executing commands, and modifying files. These systems typically employ multi-agent architectures with specialized agents for different coding tasks, requiring careful risk management given their access to sensitive codebases and ability to execute arbitrary code.

## [Agentic Call Assistant](call-assistant.md)

Agentic call assistants handle customer phone inquiries, answer questions about products and services, and perform simple transactional operations like appointment scheduling and booking modifications. These systems operate in real-time conversational contexts requiring natural language understanding, access to customer databases, and integration with booking systems. This example demonstrates framework application with higher risk appetite (threshold: Impact ≥4 AND Likelihood ≥3), appropriate for organisations prioritising rapid deployment and customer experience over defence-in-depth.
