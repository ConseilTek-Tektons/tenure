# Lifecycle copilot and grounded retrieval

Tenure retrieves approved worker-event, rule-impact, task, target, reconciliation, and SLO context after tenant and feature authorization. Local retrieval is built in. Optional OpenAI Responses mode sets `store: false`; optional hosted RAG uses `file_search` over approved lifecycle documentation.

The copilot cannot publish a rule, change a worker, grant or revoke access, execute a task, or approve a repair. Suggestions must cite the underlying event, rule version, target receipt, or reconciliation result.
