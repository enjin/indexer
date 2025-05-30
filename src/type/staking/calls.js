'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.restoreLedger =
    exports.deprecateControllerBatch =
    exports.updatePayee =
    exports.payoutStakersByPage =
    exports.setMinCommission =
    exports.forceApplyMinCommission =
    exports.chillOther =
    exports.setStakingConfigs =
    exports.kick =
    exports.reapStash =
    exports.rebond =
    exports.payoutStakers =
    exports.cancelDeferredSlash =
    exports.forceNewEraAlways =
    exports.forceUnstake =
    exports.setInvulnerables =
    exports.forceNewEra =
    exports.forceNoEras =
    exports.scaleValidatorCount =
    exports.increaseValidatorCount =
    exports.setValidatorCount =
    exports.setController =
    exports.setPayee =
    exports.chill =
    exports.nominate =
    exports.validate =
    exports.withdrawUnbonded =
    exports.unbond =
    exports.bondExtra =
    exports.bond =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
exports.bond = {
    name: 'Staking.bond',
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     *
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     *
     * The dispatch origin for this call must be _Signed_ by the stash account.
     *
     * Emits `Bonded`.
     * ## Complexity
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     *
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     */
    enjinV100: new support_1.CallType(
        'Staking.bond',
        support_1.sts.struct({
            controller: enjinV100.MultiAddress,
            value: support_1.sts.bigint(),
            payee: enjinV100.RewardDestination,
        })
    ),
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     *
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     *
     * The dispatch origin for this call must be _Signed_ by the stash account.
     *
     * Emits `Bonded`.
     * ## Complexity
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     *
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     */
    enjinV101: new support_1.CallType(
        'Staking.bond',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
            payee: enjinV101.RewardDestination,
        })
    ),
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     *
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     *
     * The dispatch origin for this call must be _Signed_ by the stash account.
     *
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     *
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    v100: new support_1.CallType(
        'Staking.bond',
        support_1.sts.struct({
            controller: v100.MultiAddress,
            value: support_1.sts.bigint(),
            payee: v100.RewardDestination,
        })
    ),
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     *
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     *
     * The dispatch origin for this call must be _Signed_ by the stash account.
     *
     * Emits `Bonded`.
     * ## Complexity
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     *
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     */
    v105: new support_1.CallType(
        'Staking.bond',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
            payee: v105.RewardDestination,
        })
    ),
}
exports.bondExtra = {
    name: 'Staking.bond_extra',
    /**
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     *
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     *
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     *
     * Emits `Bonded`.
     *
     * ## Complexity
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     */
    enjinV100: new support_1.CallType(
        'Staking.bond_extra',
        support_1.sts.struct({
            maxAdditional: support_1.sts.bigint(),
        })
    ),
}
exports.unbond = {
    name: 'Staking.unbond',
    /**
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     *
     * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
     * can co-exists at the same time. If there are no unlocking chunks slots available
     * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
     *
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     *
     * Emits `Unbonded`.
     *
     * See also [`Call::withdraw_unbonded`].
     */
    enjinV100: new support_1.CallType(
        'Staking.unbond',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
        })
    ),
}
exports.withdrawUnbonded = {
    name: 'Staking.withdraw_unbonded',
    /**
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     *
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     *
     * The dispatch origin for this call must be _Signed_ by the controller.
     *
     * Emits `Withdrawn`.
     *
     * See also [`Call::unbond`].
     *
     * ## Complexity
     * O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     */
    enjinV100: new support_1.CallType(
        'Staking.withdraw_unbonded',
        support_1.sts.struct({
            numSlashingSpans: support_1.sts.number(),
        })
    ),
}
exports.validate = {
    name: 'Staking.validate',
    /**
     * Declare the desire to validate for the origin controller.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    enjinV100: new support_1.CallType(
        'Staking.validate',
        support_1.sts.struct({
            prefs: enjinV100.ValidatorPrefs,
        })
    ),
}
exports.nominate = {
    name: 'Staking.nominate',
    /**
     * Declare the desire to nominate `targets` for the origin controller.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *
     * ## Complexity
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
     * - Both the reads and writes follow a similar pattern.
     */
    enjinV100: new support_1.CallType(
        'Staking.nominate',
        support_1.sts.struct({
            targets: support_1.sts.array(function () {
                return enjinV100.MultiAddress
            }),
        })
    ),
}
exports.chill = {
    name: 'Staking.chill',
    /**
     * Declare no desire to either validate or nominate.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *
     * ## Complexity
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     */
    enjinV100: new support_1.CallType('Staking.chill', support_1.sts.unit()),
}
exports.setPayee = {
    name: 'Staking.set_payee',
    /**
     * (Re-)set the payment target for a controller.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *
     * ## Complexity
     * - O(1)
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     */
    enjinV100: new support_1.CallType(
        'Staking.set_payee',
        support_1.sts.struct({
            payee: enjinV100.RewardDestination,
        })
    ),
}
exports.setController = {
    name: 'Staking.set_controller',
    /**
     * (Re-)set the controller of a stash.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     *
     * ## Complexity
     * O(1)
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     */
    enjinV100: new support_1.CallType(
        'Staking.set_controller',
        support_1.sts.struct({
            controller: enjinV100.MultiAddress,
        })
    ),
    /**
     * (Re-)sets the controller of a stash to the stash itself. This function previously
     * accepted a `controller` argument to set the controller to an account other than the
     * stash itself. This functionality has now been removed, now only setting the controller
     * to the stash, if it is not already.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     *
     * ## Complexity
     * O(1)
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     */
    enjinV101: new support_1.CallType('Staking.set_controller', support_1.sts.unit()),
    /**
     * (Re-)set the controller of a stash.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     *
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    v100: new support_1.CallType(
        'Staking.set_controller',
        support_1.sts.struct({
            controller: v100.MultiAddress,
        })
    ),
    /**
     * (Re-)sets the controller of a stash to the stash itself. This function previously
     * accepted a `controller` argument to set the controller to an account other than the
     * stash itself. This functionality has now been removed, now only setting the controller
     * to the stash, if it is not already.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     *
     * ## Complexity
     * O(1)
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     */
    v105: new support_1.CallType('Staking.set_controller', support_1.sts.unit()),
}
exports.setValidatorCount = {
    name: 'Staking.set_validator_count',
    /**
     * Sets the ideal number of validators.
     *
     * The dispatch origin must be Root.
     *
     * ## Complexity
     * O(1)
     */
    enjinV100: new support_1.CallType(
        'Staking.set_validator_count',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.increaseValidatorCount = {
    name: 'Staking.increase_validator_count',
    /**
     * Increments the ideal number of validators upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     *
     * The dispatch origin must be Root.
     *
     * ## Complexity
     * Same as [`Self::set_validator_count`].
     */
    enjinV100: new support_1.CallType(
        'Staking.increase_validator_count',
        support_1.sts.struct({
            additional: support_1.sts.number(),
        })
    ),
}
exports.scaleValidatorCount = {
    name: 'Staking.scale_validator_count',
    /**
     * Scale up the ideal number of validators by a factor upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     *
     * The dispatch origin must be Root.
     *
     * ## Complexity
     * Same as [`Self::set_validator_count`].
     */
    enjinV100: new support_1.CallType(
        'Staking.scale_validator_count',
        support_1.sts.struct({
            factor: enjinV100.Percent,
        })
    ),
}
exports.forceNoEras = {
    name: 'Staking.force_no_eras',
    /**
     * Force there to be no new eras indefinitely.
     *
     * The dispatch origin must be Root.
     *
     * # Warning
     *
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     *
     * ## Complexity
     * - No arguments.
     * - Weight: O(1)
     */
    enjinV100: new support_1.CallType('Staking.force_no_eras', support_1.sts.unit()),
}
exports.forceNewEra = {
    name: 'Staking.force_new_era',
    /**
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     *
     * The dispatch origin must be Root.
     *
     * # Warning
     *
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     *
     * ## Complexity
     * - No arguments.
     * - Weight: O(1)
     */
    enjinV100: new support_1.CallType('Staking.force_new_era', support_1.sts.unit()),
}
exports.setInvulnerables = {
    name: 'Staking.set_invulnerables',
    /**
     * Set the validators who cannot be slashed (if any).
     *
     * The dispatch origin must be Root.
     */
    enjinV100: new support_1.CallType(
        'Staking.set_invulnerables',
        support_1.sts.struct({
            invulnerables: support_1.sts.array(function () {
                return enjinV100.AccountId32
            }),
        })
    ),
}
exports.forceUnstake = {
    name: 'Staking.force_unstake',
    /**
     * Force a current staker to become completely unstaked, immediately.
     *
     * The dispatch origin must be Root.
     */
    enjinV100: new support_1.CallType(
        'Staking.force_unstake',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            numSlashingSpans: support_1.sts.number(),
        })
    ),
}
exports.forceNewEraAlways = {
    name: 'Staking.force_new_era_always',
    /**
     * Force there to be a new era at the end of sessions indefinitely.
     *
     * The dispatch origin must be Root.
     *
     * # Warning
     *
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     */
    enjinV100: new support_1.CallType('Staking.force_new_era_always', support_1.sts.unit()),
}
exports.cancelDeferredSlash = {
    name: 'Staking.cancel_deferred_slash',
    /**
     * Cancel enactment of a deferred slash.
     *
     * Can be called by the `T::AdminOrigin`.
     *
     * Parameters: era and indices of the slashes for that era to kill.
     */
    enjinV100: new support_1.CallType(
        'Staking.cancel_deferred_slash',
        support_1.sts.struct({
            era: support_1.sts.number(),
            slashIndices: support_1.sts.array(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.payoutStakers = {
    name: 'Staking.payout_stakers',
    /**
     * Pay out all the stakers behind a single validator for a single era.
     *
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     *
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     *
     * ## Complexity
     * - At most O(MaxNominatorRewardedPerValidator).
     */
    enjinV100: new support_1.CallType(
        'Staking.payout_stakers',
        support_1.sts.struct({
            validatorStash: enjinV100.AccountId32,
            era: support_1.sts.number(),
        })
    ),
}
exports.rebond = {
    name: 'Staking.rebond',
    /**
     * Rebond a portion of the stash scheduled to be unlocked.
     *
     * The dispatch origin must be signed by the controller.
     *
     * ## Complexity
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MaxUnlockingChunks`.
     */
    enjinV100: new support_1.CallType(
        'Staking.rebond',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
        })
    ),
}
exports.reapStash = {
    name: 'Staking.reap_stash',
    /**
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     *
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     *
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     *
     * It can be called by anyone, as long as `stash` meets the above requirements.
     *
     * Refunds the transaction fees upon successful execution.
     */
    enjinV100: new support_1.CallType(
        'Staking.reap_stash',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            numSlashingSpans: support_1.sts.number(),
        })
    ),
}
exports.kick = {
    name: 'Staking.kick',
    /**
     * Remove the given nominations from the calling validator.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     *
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    enjinV100: new support_1.CallType(
        'Staking.kick',
        support_1.sts.struct({
            who: support_1.sts.array(function () {
                return enjinV100.MultiAddress
            }),
        })
    ),
}
exports.setStakingConfigs = {
    name: 'Staking.set_staking_configs',
    /**
     * Update the various staking configurations .
     *
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     *
     * RuntimeOrigin must be Root to call this function.
     *
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    enjinV100: new support_1.CallType(
        'Staking.set_staking_configs',
        support_1.sts.struct({
            minNominatorBond: enjinV100.ConfigOp,
            minValidatorBond: enjinV100.ConfigOp,
            maxNominatorCount: enjinV100.Type_364,
            maxValidatorCount: enjinV100.Type_364,
            chillThreshold: enjinV100.Type_365,
            minCommission: enjinV100.Type_366,
        })
    ),
    /**
     * Update the various staking configurations .
     *
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     *
     * RuntimeOrigin must be Root to call this function.
     *
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    enjinV1032: new support_1.CallType(
        'Staking.set_staking_configs',
        support_1.sts.struct({
            minNominatorBond: enjinV1032.ConfigOp,
            minValidatorBond: enjinV1032.ConfigOp,
            maxNominatorCount: enjinV1032.Type_413,
            maxValidatorCount: enjinV1032.Type_413,
            chillThreshold: enjinV1032.Type_414,
            minCommission: enjinV1032.Type_415,
            maxStakedRewards: enjinV1032.Type_414,
        })
    ),
    /**
     * Update the various staking configurations .
     *
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     *
     * RuntimeOrigin must be Root to call this function.
     *
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    v100: new support_1.CallType(
        'Staking.set_staking_configs',
        support_1.sts.struct({
            minNominatorBond: v100.ConfigOp,
            minValidatorBond: v100.ConfigOp,
            maxNominatorCount: v100.Type_326,
            maxValidatorCount: v100.Type_326,
            chillThreshold: v100.Type_327,
            minCommission: v100.Type_328,
        })
    ),
    /**
     * Update the various staking configurations .
     *
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     *
     * RuntimeOrigin must be Root to call this function.
     *
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    v1030: new support_1.CallType(
        'Staking.set_staking_configs',
        support_1.sts.struct({
            minNominatorBond: v1030.ConfigOp,
            minValidatorBond: v1030.ConfigOp,
            maxNominatorCount: v1030.Type_413,
            maxValidatorCount: v1030.Type_413,
            chillThreshold: v1030.Type_414,
            minCommission: v1030.Type_415,
            maxStakedRewards: v1030.Type_414,
        })
    ),
}
exports.chillOther = {
    name: 'Staking.chill_other',
    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     *
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     *
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     *
     * * `controller` must belong to a nominator who has become non-decodable,
     *
     * Or:
     *
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     *
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    enjinV100: new support_1.CallType(
        'Staking.chill_other',
        support_1.sts.struct({
            controller: enjinV100.AccountId32,
        })
    ),
    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     *
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     *
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     *
     * * `controller` must belong to a nominator who has become non-decodable,
     *
     * Or:
     *
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     *
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    enjinV1032: new support_1.CallType(
        'Staking.chill_other',
        support_1.sts.struct({
            stash: enjinV1032.AccountId32,
        })
    ),
    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     *
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     *
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     *
     * * `controller` must belong to a nominator who has become non-decodable,
     *
     * Or:
     *
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     *
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    v100: new support_1.CallType(
        'Staking.chill_other',
        support_1.sts.struct({
            controller: v100.AccountId32,
        })
    ),
    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     *
     * Effects will be felt at the beginning of the next era.
     *
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     *
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     *
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     *
     * * `controller` must belong to a nominator who has become non-decodable,
     *
     * Or:
     *
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     *
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    v1030: new support_1.CallType(
        'Staking.chill_other',
        support_1.sts.struct({
            stash: v1030.AccountId32,
        })
    ),
}
exports.forceApplyMinCommission = {
    name: 'Staking.force_apply_min_commission',
    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    enjinV100: new support_1.CallType(
        'Staking.force_apply_min_commission',
        support_1.sts.struct({
            validatorStash: enjinV100.AccountId32,
        })
    ),
}
exports.setMinCommission = {
    name: 'Staking.set_min_commission',
    /**
     * Sets the minimum amount of commission that each validators must maintain.
     *
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    enjinV100: new support_1.CallType(
        'Staking.set_min_commission',
        support_1.sts.struct({
            new: enjinV100.Perbill,
        })
    ),
}
exports.payoutStakersByPage = {
    name: 'Staking.payout_stakers_by_page',
    /**
     * Pay out a page of the stakers behind a validator for the given era and page.
     *
     * - `validator_stash` is the stash account of the validator.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * - `page` is the page index of nominators to pay out with value between 0 and
     *   `num_nominators / T::MaxExposurePageSize`.
     *
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     *
     * If a validator has more than [`Config::MaxExposurePageSize`] nominators backing
     * them, then the list of nominators is paged, with each page being capped at
     * [`Config::MaxExposurePageSize`.] If a validator has more than one page of nominators,
     * the call needs to be made for each page separately in order for all the nominators
     * backing a validator to receive the reward. The nominators are not sorted across pages
     * and so it should not be assumed the highest staker would be on the topmost page and vice
     * versa. If rewards are not claimed in [`Config::HistoryDepth`] eras, they are lost.
     */
    enjinV1032: new support_1.CallType(
        'Staking.payout_stakers_by_page',
        support_1.sts.struct({
            validatorStash: enjinV1032.AccountId32,
            era: support_1.sts.number(),
            page: support_1.sts.number(),
        })
    ),
}
exports.updatePayee = {
    name: 'Staking.update_payee',
    /**
     * Migrates an account's `RewardDestination::Controller` to
     * `RewardDestination::Account(controller)`.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * This will waive the transaction fee if the `payee` is successfully migrated.
     */
    enjinV1032: new support_1.CallType(
        'Staking.update_payee',
        support_1.sts.struct({
            controller: enjinV1032.AccountId32,
        })
    ),
}
exports.deprecateControllerBatch = {
    name: 'Staking.deprecate_controller_batch',
    /**
     * Updates a batch of controller accounts to their corresponding stash account if they are
     * not the same. Ignores any controller accounts that do not exist, and does not operate if
     * the stash and controller are already the same.
     *
     * Effects will be felt instantly (as soon as this function is completed successfully).
     *
     * The dispatch origin must be `T::AdminOrigin`.
     */
    enjinV1032: new support_1.CallType(
        'Staking.deprecate_controller_batch',
        support_1.sts.struct({
            controllers: support_1.sts.array(function () {
                return enjinV1032.AccountId32
            }),
        })
    ),
}
exports.restoreLedger = {
    name: 'Staking.restore_ledger',
    /**
     * Restores the state of a ledger which is in an inconsistent state.
     *
     * The requirements to restore a ledger are the following:
     * * The stash is bonded; or
     * * The stash is not bonded but it has a staking lock left behind; or
     * * If the stash has an associated ledger and its state is inconsistent; or
     * * If the ledger is not corrupted *but* its staking lock is out of sync.
     *
     * The `maybe_*` input parameters will overwrite the corresponding data and metadata of the
     * ledger associated with the stash. If the input parameters are not set, the ledger will
     * be reset values from on-chain state.
     */
    enjinV1050: new support_1.CallType(
        'Staking.restore_ledger',
        support_1.sts.struct({
            stash: enjinV1050.AccountId32,
            maybeController: support_1.sts.option(function () {
                return enjinV1050.AccountId32
            }),
            maybeTotal: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            maybeUnlocking: support_1.sts.option(function () {
                return support_1.sts.array(function () {
                    return enjinV1050.UnlockChunk
                })
            }),
        })
    ),
}
