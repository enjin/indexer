'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.collatorSelected =
    exports.nominationRemoved =
    exports.nominated =
    exports.candidateRemoved =
    exports.candidateJoined =
    exports.roundFinalized =
    exports.newInvulnerables =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.newInvulnerables = {
    name: 'CollatorStaking.NewInvulnerables',
    /**
     * A new list of invulnerables has been set by root.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.NewInvulnerables',
        support_1.sts.struct({
            /**
             * list of [`AccountId`](frame_system::Config::AccountId) of invulnerables
             */
            new: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
        })
    ),
}
exports.roundFinalized = {
    name: 'CollatorStaking.RoundFinalized',
    /**
     * A new round was finalized
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.RoundFinalized',
        support_1.sts.struct({
            /**
             * round number that was finalized
             */
            number: support_1.sts.number(),
        })
    ),
}
exports.candidateJoined = {
    name: 'CollatorStaking.CandidateJoined',
    /**
     * A new candidate joined the list of candidates.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.CandidateJoined',
        support_1.sts.struct({
            /**
             * accountId of the new candidate
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * amount staked
             */
            amount: support_1.sts.bigint(),
            /**
             * The percentage cut on the rewards that goes to the nominators
             */
            rewardsCut: matrixEnjinV603.Perbill,
        })
    ),
}
exports.candidateRemoved = {
    name: 'CollatorStaking.CandidateRemoved',
    /**
     * Candidate was removed.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.CandidateRemoved',
        support_1.sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of candidate
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.nominated = {
    name: 'CollatorStaking.Nominated',
    /**
     * A new nomination was registered for a specific candidate.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.Nominated',
        support_1.sts.struct({
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
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.nominationRemoved = {
    name: 'CollatorStaking.NominationRemoved',
    /**
     * Nomination was removed.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.NominationRemoved',
        support_1.sts.struct({
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
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.collatorSelected = {
    name: 'CollatorStaking.CollatorSelected',
    /**
     * A candidate has been selected to become a collator for the current round.
     */
    matrixEnjinV603: new support_1.EventType(
        'CollatorStaking.CollatorSelected',
        support_1.sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of collator
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
