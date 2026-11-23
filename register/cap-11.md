# CAP-11 · File and Data Management

ARC element (capability, Operational), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cap-11/

The capability to manage the full lifecycle of files and data by creating, reading, modifying, organizing, converting, querying, and updating information across both unstructured artifacts (e.g. documents, spreadsheets, media files) and structured data stores (e.g. SQL/NoSQL databases, data warehouses, vector or embedding stores) in support of operational tasks. This includes ingesting and transforming datasets, generating or updating files, maintaining directory or schema structures, executing database queries or updates, and storing or retrieving embeddings or derived data products.

Used at: read, propose, act with approval, act alone; irreversible: ask; external: ask

## Risks that arise from it

- RISK-041: Unintended overwriting or deletion of files or data
- RISK-042: Database overload due to inefficient data operations
- RISK-043: Exposure of sensitive data through file or database access
- RISK-044: Prompt injection via malicious files or data
- RISK-066: Personal data collected, kept, or passed on beyond what the task needs
