import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1040 from '../matrixV1040'

export const newInvulnerables = {
    name: 'CollatorStaking.NewInvulnerables',
    /**
     * A new list of invulnerables has been set by root.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.NewInvulnerables',
        sts.struct({
            /**
             * list of [`AccountId`](frame_system::Config::AccountId) of invulnerables
             */
            new: sts.array(() => matrixEnjinV603.AccountId32),
        })
    ),
}

export const roundFinalized = {
    name: 'CollatorStaking.RoundFinalized',
    /**
     * A new round was finalized
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.RoundFinalized',
        sts.struct({
            /**
             * round number that was finalized
             */
            number: sts.number(),
        })
    ),
}

export const candidateJoined = {
    name: 'CollatorStaking.CandidateJoined',
    /**
     * A new candidate joined the list of candidates.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CandidateJoined',
        sts.struct({
            /**
             * accountId of the new candidate
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * amount staked
             */
            amount: sts.bigint(),
            /**
             * The percentage cut on the rewards that goes to the nominators
             */
            rewardsCut: matrixEnjinV603.Perbill,
        })
    ),
    /**
     * A new candidate joined the list of candidates.
     */
    matrixV1040: new EventType(
        'CollatorStaking.CandidateJoined',
        sts.struct({
            /**
             * accountId of the new candidate
             */
            accountId: matrixV1040.AccountId32,
            /**
             * amount staked
             */
            amount: sts.bigint(),
        })
    ),
}

export const candidateRemoved = {
    name: 'CollatorStaking.CandidateRemoved',
    /**
     * Candidate was removed.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CandidateRemoved',
        sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of candidate
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const nominated = {
    name: 'CollatorStaking.Nominated',
    /**
     * A new nomination was registered for a specific candidate.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.Nominated',
        sts.struct({
            /**
             * the account that was nominated
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * the collator connected to the account
             */
            collatorId: matrixEnjinV603.AccountId32,
            /**
             * amount staked from collator
             */
            amount: sts.bigint(),
        })
    ),
}

export const nominationRemoved = {
    name: 'CollatorStaking.NominationRemoved',
    /**
     * Nomination was removed.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.NominationRemoved',
        sts.struct({
            /**
             * the account removed from nominated list
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * collator connected to the account
             */
            collatorId: matrixEnjinV603.AccountId32,
            /**
             * amount unstaked from collator
             */
            amount: sts.bigint(),
        })
    ),
}

export const collatorSelected = {
    name: 'CollatorStaking.CollatorSelected',
    /**
     * A candidate has been selected to become a collator for the current round.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CollatorSelected',
        sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of collator
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const candidateExitFailed = {
    name: 'CollatorStaking.CandidateExitFailed',
    /**
     * A candidate exit could not be completed and the pending exit was left in place.
     *
     * The attempt was rolled back in full, so no partial refund was committed and no hold was
     * orphaned. The exit is retried on a later sweep; this event exists so that a stranded
     * exit is observable rather than silently swallowed.
     *
     * This variant is deliberately the LAST one. The enum carries no explicit
     * `#[codec(index)]` attributes, so a variant's index is its declaration position, and
     * every indexer, subscriber and already-emitted historical event decodes by that number.
     * Declaring this alongside the other candidate events — where it reads better — silently
     * renumbered `CollatorSelected` from 6 to 7. New variants are appended;
     * `test_event_indices_are_stable` pins the whole set so this cannot happen again.
     */
    matrixV1040: new EventType(
        'CollatorStaking.CandidateExitFailed',
        sts.struct({
            /**
             * AccountId of the candidate whose exit failed
             */
            accountId: matrixV1040.AccountId32,
            /**
             * why the exit failed
             */
            error: matrixV1040.DispatchError,
        })
    ),
}
