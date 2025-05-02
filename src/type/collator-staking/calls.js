'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.forceSetMinCollatorStake =
    exports.forceSetCurrentMaxCandidates =
    exports.removeNomination =
    exports.nominate =
    exports.unbond =
    exports.joinCandidates =
    exports.setInvulnerables =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.setInvulnerables = {
    name: 'CollatorStaking.set_invulnerables',
    /**
     * Force set the invulnerables.
     *
     * [`ForceOrigin`](Config::ForceOrigin) call only.
     *
     * # Errors
     *
     * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.set_invulnerables',
        support_1.sts.struct({
            accounts: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
        })
    ),
}
exports.joinCandidates = {
    name: 'CollatorStaking.join_candidates',
    /**
     * Join the list of candidates for collation.
     *
     * # Errors
     *
     * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
     * - [`Error::NominationExists`] if nomination already exists.
     * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
     * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.join_candidates',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            rewardsCut: matrixEnjinV603.Perbill,
        })
    ),
}
exports.unbond = {
    name: 'CollatorStaking.unbond',
    /**
     * Leave the collator set of this parachain.
     *
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     *
     * # Errors
     *
     * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
     * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
     * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
     */
    matrixEnjinV603: new support_1.CallType('CollatorStaking.unbond', support_1.sts.unit()),
}
exports.nominate = {
    name: 'CollatorStaking.nominate',
    /**
     * Nominate a specific candidate to be selected for collation and block production.
     *
     * # Errors
     *
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationExists`] if the nomination already exists.
     * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
     *   minimum.
     * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.nominate',
        support_1.sts.struct({
            collatorId: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.removeNomination = {
    name: 'CollatorStaking.remove_nomination',
    /**
     * Remove a nomination previously registered for a specific collator candidate.
     *
     * # Errors
     *
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
     * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.remove_nomination',
        support_1.sts.struct({
            collatorId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.forceSetCurrentMaxCandidates = {
    name: 'CollatorStaking.force_set_current_max_candidates',
    /**
     * Set the current max candidates, must be within 0 and
     * [`MaxCandidates`](Config::MaxCandidates)
     *
     * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
     *
     * # Errors
     *
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.force_set_current_max_candidates',
        support_1.sts.struct({
            maxCandidates: support_1.sts.number(),
        })
    ),
}
exports.forceSetMinCollatorStake = {
    name: 'CollatorStaking.force_set_min_collator_stake',
    /**
     * Set the minimum collator stake amount
     *
     * [`T::ForceOrigin`](Config::ForceOrigin) call only
     */
    matrixEnjinV603: new support_1.CallType(
        'CollatorStaking.force_set_min_collator_stake',
        support_1.sts.struct({
            minCollatorStake: support_1.sts.bigint(),
        })
    ),
}
