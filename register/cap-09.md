# CAP-09 · Other Programmatic Interfaces

ARC element (capability, Interaction), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cap-09/

The capability to interact with external systems through non-graphical, programmatic interfaces, such as APIs, SDKs, and backend services, to exchange data or trigger actions as part of task execution. This includes calling REST or GraphQL APIs, invoking cloud services, publishing or consuming messages from queues or event streams, and performing operations such as code pushes, data updates, or system integrations across enterprise platforms. This includes sending and receiving email, chat, or other messages through an API or mail protocol, including when those messages are also Official Communication (CAP-05).

Used at: read, propose, act with approval, act alone; irreversible: ask; external: ask

## Risks that arise from it

- RISK-038: Incorrect use of unfamiliar programmatic interfaces
- RISK-059: Prompt injection through inbound messages
