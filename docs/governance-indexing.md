# Governance indexing

The Indexer subscribes to Referenda, ConvictionVoting, Preimage, and Whitelist on both chain profiles. Matrixchain also indexes FellowshipReferenda and FellowshipCollective; Relaychain also indexes Treasury. The new GraphQL entities expose current referendum, vote, delegation, fellowship member, treasury item, and whitelist state. Governance events appear in the existing `Event` entity with names such as `ReferendaSubmitted` and a `GovernanceEventData` payload. `GovernanceActivity` also retains searchable event history, including terminal referendum events after runtime storage is pruned.

Current referendum state and tally are read from `ReferendumInfoFor` at the processed block hash. Preimage lookups are stored up to 64 KiB. `proposalPreimageStatus` distinguishes `Inline`, `Resolved`, `AvailableTooLarge`, `Missing` (confirmed absent), and `Unresolved` (a reader is unavailable). Existing vote events without a poll index use the linked call's `pollIndex`; Relaychain's later `currency` field is part of each vote's identity.

## Historical backfill

Adding a subscription does not make the live processor revisit past blocks. Use the governance-only backfill after the schema migration, with a confirmed network, database, archive gateway, and finalized block range. Start at the first block where the relevant governance pallet is active. Verify that activation height on the target chain; the `blockNumber: 0` entry for Enjin Matrixchain v1041 in `typegen/enjin-matrixchain.jsonl` is a metadata placeholder, not an activation height.

1. Verify the database is the intended target and apply the governance migration through the normal deployment process. Do not run against a shared database while another process is writing the same governance tables.
2. Pause the live processor for that database, then run `pnpm run governance:backfill -- <from-block> <finalized-to-block>` with the target `CHAIN_NAME`, `CHAIN_ENDPOINT`, archive endpoint, and database configuration. The command requires both bounds and a configured archive gateway.
3. The backfill uses its own `squid_governance_backfill` cursor schema, writes governance entities and missing `Event` rows, and resumes after interruption. Historical `Event` rows have a null extrinsic relation; `GovernanceActivity.extrinsicId` retains the on-chain ID. Existing `Event` rows are preserved. IDs are deterministic; current-state updates from an older block do not replace newer rows. Keep the cursor schema until the range is complete.
4. Compare a sample of referendum statuses, tallies, votes, deposits, and treasury items against block-hash-pinned chain storage and event history. Check counts by pallet and block range, then resume the live processor. A current snapshot alone cannot recover vote and lifecycle history.

For a newly provisioned database, the ordinary processor can index governance from its configured start block and this separate backfill is unnecessary. Matrixchain history before v1040 uses legacy Democracy/Council pallets and is outside this implementation's event subscriptions.
