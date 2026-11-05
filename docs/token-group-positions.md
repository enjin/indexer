# Token-group membership positions

`TokenGroupToken.position` is the zero-based index of a group in a token's on-chain `groups` list. It is not the token's index within a group. Order membership query results explicitly with `tokenGroupTokens(orderBy: position_ASC)` when displaying group priority.

Live membership refreshes repair null or invalid positions even if the group IDs have not changed. Existing rows that receive no refresh can have their missing positions filled by the explicitly dispatched `SYNC_TOKEN_GROUP_POSITIONS` job on the `TOKENS` queue.

## Repair missing positions

1. Deploy the corrected worker and select the intended Matrixchain environment and token IDs. The processor can keep running. The job reads indexed events and memberships from the same per-token database transaction; it does not contact RPC or require a block hash.
2. Add a job named `SYNC_TOKEN_GROUP_POSITIONS` to the `TOKENS` queue using Bull Board, with an explicit list of 1–100 full token IDs:

   ```json
   {
     "tokenIds": ["3844-11", "3844-6", "3844-7"],
     "dryRun": true
   }
   ```

3. Review the logs, which show the reconstructed group list, baseline event, and number of missing positions. Dry runs are the default. For these three tokens, group `32` was assigned at block `6825053` and group `33` at block `6825264`, giving positions `0` and `1`.
4. Submit the same bounded payload with `dryRun: false` and a fresh BullMQ job ID. Only null position columns are updated; existing positions, membership IDs, and membership sets are preserved. A concurrent write to a membership aborts that token's transaction rather than overwriting the other writer. Retry the job after a conflict.
5. Repeat the dry run with a fresh job ID and verify GraphQL results. Repaired tokens should report no changes.

## Event history rules

Events are ordered by block height and event index, including older rows whose position must be read from their Subsquid event ID. Ordinary token creation provides an empty baseline. A `TokenGroupsUpdated` event supplies a complete ordered replacement, overriding earlier assignment order. Additions append; removing and re-adding a group must not reuse its first-ever assignment. A token's destruction ends its previous lifetime.

The job requires a reconstructable baseline, unique groups, an exact match with current memberships, and agreement with every position already set. It skips missing or ambiguous histories, malformed events, conflicting positions, and histories exceeding 10,000 events per token. Removal histories that could leave multiple groups in an uncertain order remain untouched until a later explicit full order is available. Storage-only changes such as `TokenUpdated` are not persisted as membership events, so event history cannot recover every possible storage/import change; the job never overwrites an existing position to guess an order.

The job does not scan the database or dispatch follow-up batches. Split larger repairs into explicit lists of at most 100 tokens. Repeating it is safe because filled positions are preserved. Deploying the code does not backfill rows automatically.
