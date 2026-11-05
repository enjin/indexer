# Token-group membership positions

`TokenGroupToken.position` is the zero-based index of a group in a token's on-chain `groups` list. It is not the token's index within a group. Order membership query results explicitly with `tokenGroupTokens(orderBy: position_ASC)` when displaying group priority.

Live membership refreshes repair null or invalid positions even if the group IDs have not changed. Existing rows that receive no refresh need the explicitly dispatched `SYNC_TOKEN_GROUP_POSITIONS` job on the `TOKENS` queue.

## Repair an existing database

1. Confirm the intended Matrixchain network, database, RPC endpoint and token IDs. Deploy the corrected worker first.
2. Pause the processor and wait for its current batch to finish before a write run. Keep it paused through verification. `ChainInfo` is saved at the end of a batch, so checking the latest indexed block alone cannot rule out in-flight membership changes.
3. Read the latest indexed `ChainInfo.blockHash` and `blockNumber`. Wait until that block is finalized on the same chain. The job rejects a hash that differs from the latest indexed block, an RPC/database genesis mismatch, or a noncanonical/unfinalized block.
4. Add a job named `SYNC_TOKEN_GROUP_POSITIONS` to the `TOKENS` queue using Bull Board, with an explicit list of 1–100 full token IDs and the block hash from step 3. For example:

   ```json
   {
     "tokenIds": ["7-1", "7-2"],
     "blockHash": "<latest indexed canonical finalized 0x-prefixed 32-byte hash>",
     "dryRun": true
   }
   ```

5. Review the job logs. Dry runs are the default and report how many positions would change. Missing tokens/storage and mismatched membership sets are skipped, with a reason. Investigate those mismatches separately; this job never adds or deletes memberships.
6. Submit the same bounded payload with `dryRun: false` and a fresh BullMQ job ID. Each token's group order comes from raw storage at the specified block. Only differing position columns are updated, inside a repeatable-read transaction; concurrent updates/deletes of those rows abort the transaction. No IDs are renamed.
7. Repeat the dry run with a fresh job ID; it should report zero changes for repaired tokens. Verify GraphQL results, then resume the processor. If the job aborts, inspect the cause and reselect the latest indexed finalized snapshot before retrying.

The job does not scan the database or dispatch follow-up batches. Split larger repairs into explicit lists of at most 100 tokens. It is safe to repeat against an unchanged indexed snapshot. Production execution is an operational step with a separately confirmed target and scope; deploying the code does not repair old rows automatically.
