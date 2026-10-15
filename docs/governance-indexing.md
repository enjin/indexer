# Governance indexing

The Indexer subscribes to Referenda, ConvictionVoting, FellowshipReferenda, FellowshipCollective, Preimage, and Whitelist on both chain profiles. Relaychain also indexes Treasury. The new GraphQL entities expose current referendum, vote, delegation, fellowship member, treasury item, and whitelist state. Governance events appear in the existing `Event` entity with names such as `ReferendaSubmitted` and a `GovernanceEventData` payload. `GovernanceActivity` also retains searchable event history, including terminal referendum events after runtime storage is pruned.

Current referendum state and tally are read from `ReferendumInfoFor` at the processed block hash. Preimage lookups are stored up to 64 KiB. `proposalPreimageStatus` distinguishes `Inline`, `Resolved`, `AvailableTooLarge`, `Missing` (confirmed absent), and `Unresolved` (a reader is unavailable). Existing vote events without a poll index use the linked call's `pollIndex`; Relaychain's later `currency` field is part of each vote's identity.

`GovernanceReferendum.voters` links to `GovernanceVote` rows, which expose each voter's `accountId`, currency, vote, and `active` state. Each vote also exposes its parent as `referendum`. A voter can have more than one row when currencies differ. The relation includes inactive vote rows retained after a removal; use the root `governanceVotes` query with `referendumId` and `active` filters when paging through large referenda. A relation can only expose votes already indexed: votes removed from current RPC storage before the initial import still require the historical governance backfill.

`GovernanceReferendum.id` is the referendum index as a string for `Referenda` (for example, `"13"`). `FellowshipReferenda` retains a `FellowshipReferenda:` prefix because its independent counter can have the same number. The migration updates existing Referenda IDs and their vote, activity, and standard Event references; vote row IDs remain stable. The redundant `referendumIndex` field is removed; the index is available from the ID.

`governanceTracks` exposes the runtime's track definitions for both pallets. Referenda track IDs use the format `200-rnd`; FellowshipReferenda uses `200-frnd` so overlapping track indices stay distinct. A referendum retains its numeric `track` and links to the matching definition through `governanceTrack`. The migration renames existing tracks and preserves their referendum links. The current-state import reads all track constants at its pinned block; live referendum updates refresh their referenced track.

For standard conviction votes, `voteModifier` is an integer from 0 to 6: 0 means 0.1x voting power and 1–6 mean 1x–6x. Split and fellowship votes have a null modifier. `unlockableAtBlock` is the earliest block at which this vote's own lock can expire after a referendum ends. A winning standard vote with conviction stays locked for the runtime's `VoteLockingPeriod` times 1, 2, 4, 8, 16, or 32; a losing, split, or zero-conviction vote becomes eligible when the referendum ends. It is null while the referendum is ongoing. The chain requires a separate `remove_vote` and `unlock` operation, and other votes or delegations can keep an account's funds locked beyond this block. `ConvictionVoting.VoteUnlocked` is account/class scoped and cannot reliably identify a single referendum vote.

```graphql
{
  governanceReferendumById(id: "13") {
    id
    track
    governanceTrack { id name decisionPeriod }
    endedAtBlock
    voters {
      accountId
      referendum { id }
      currency
      vote
      voteModifier
      unlockableAtBlock
      active
    }
  }
}
```

## Import current RPC state

For an existing Indexer database, run the `IMPORT_GOVERNANCE_STATE` validator worker job after applying the governance schema migration. Dispatch it explicitly with `QueueUtils.dispatchImportGovernanceState({ chainName, genesisHash })` for the deployed worker's chain. Pause the live processor for that database until the job completes, then resume it. The job verifies the configured and RPC genesis hashes and pins a finalized block. Set `CHAIN_ENDPOINT` to an archival RPC endpoint so the job can also read terminal referendum history.

The snapshot imports runtime track definitions, referenda, conviction votes and delegations, fellowship referenda, votes and members on both chains, Relaychain treasury proposals and spends, and whitelisted calls. It reads current storage in pages and only updates rows whose indexed block is no newer than the snapshot block. Run it again after deploying the track and vote-detail migration to populate `governanceTracks`, referendum track links, and unlock eligibility for votes still present in RPC storage. Terminal referendum storage holds the outcome and remaining deposits, but not its track, proposal, or tally. For each terminal referendum, the import reads `ReferendumInfoFor` at the block immediately before the terminal transition, using that block's runtime metadata, and combines those fields with the current outcome and deposits. If that runtime version is absent from checked-in metadata, the import reads metadata at the same historical block from the archival RPC endpoint. The worker log reports recovered and unavailable terminal histories. A non-archival endpoint fails the import with the referendum and block that could not be read. Its processor cursor uses a unique `squid_governance_snapshot_<id>` schema, so a retry can run again.

The snapshot contains only records still present in RPC storage at that finalized block. If no ongoing record exists immediately before a terminal transition, the import reports it as unavailable and leaves fields that cannot be recovered as null. It does not create `GovernanceActivity` or `Event` history or recover records removed from current storage. Compare the imported state against the pinned current and historical RPC blocks before planning a full replay.

## Historical backfill

Adding a subscription does not make the live processor revisit past blocks. Use the governance-only backfill after the schema migration, with a confirmed network, database, historical-state-capable RPC endpoint, and finalized block range. Start at the first block where the relevant governance pallet is active. Verify that activation height on the target chain; the `blockNumber: 0` entry for Enjin Matrixchain v1041 in `typegen/enjin-matrixchain.jsonl` is a metadata placeholder, not an activation height.

1. Verify the database is the intended target and apply the governance migration through the normal deployment process. Do not run against a shared database while another process is writing the same governance tables.
2. Pause the live processor for that database, then dispatch `BACKFILL_GOVERNANCE` on the target's validator queue with `QueueUtils.dispatchBackfillGovernance({ chainName, genesisHash, fromBlock, toBlock })`. Pass the confirmed chain name, genesis hash, and inclusive finalized range. The worker checks these against its configuration and RPC finalized head, then checks historical runtime and event storage at the starting block. The replay reads blocks from the configured RPC endpoint; use an archival RPC endpoint if an ordinary node has pruned historical state.
3. The worker runs the bounded replay in a child process and waits for its exit before completing the job. Each range has a separate `squid_governance_<from>_<to>` cursor schema, so retries resume without sharing a cursor with another range. It writes governance entities and missing `Event` rows. Historical `Event` rows have a null extrinsic relation; `GovernanceActivity.extrinsicId` retains the on-chain ID. Existing `Event` rows are preserved. IDs are deterministic; current-state updates from an older block do not replace newer rows. Keep the cursor schema until the range is complete.
4. Compare a sample of referendum statuses, tallies, votes, deposits, and treasury items against block-hash-pinned chain storage and event history. Check counts by pallet and block range, then resume the live processor. A current snapshot alone cannot recover vote and lifecycle history.

For a newly provisioned database, the ordinary processor can index governance from its configured start block and this separate backfill is unnecessary. Matrixchain history before v1040 uses legacy Democracy/Council pallets and is outside this implementation's event subscriptions.
