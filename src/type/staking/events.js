'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.controllerBatchDeprecated =
    exports.snapshotTargetsSizeExceeded =
    exports.snapshotVotersSizeExceeded =
    exports.forceEra =
    exports.validatorPrefsSet =
    exports.payoutStarted =
    exports.chilled =
    exports.stakingElectionFailed =
    exports.kicked =
    exports.withdrawn =
    exports.unbonded =
    exports.bonded =
    exports.stakersElected =
    exports.oldSlashingReportDiscarded =
    exports.slashReported =
    exports.slashed =
    exports.rewarded =
    exports.eraPaid =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.eraPaid = {
    name: 'Staking.EraPaid',
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    enjinV100: new support_1.EventType(
        'Staking.EraPaid',
        support_1.sts.struct({
            eraIndex: support_1.sts.number(),
            validatorPayout: support_1.sts.bigint(),
            remainder: support_1.sts.bigint(),
        })
    ),
}
exports.rewarded = {
    name: 'Staking.Rewarded',
    /**
     * The nominator has been rewarded by this amount.
     */
    enjinV100: new support_1.EventType(
        'Staking.Rewarded',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    enjinV1032: new support_1.EventType(
        'Staking.Rewarded',
        support_1.sts.struct({
            stash: enjinV1032.AccountId32,
            dest: enjinV1032.RewardDestination,
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount.
     */
    v100: new support_1.EventType(
        'Staking.Rewarded',
        support_1.sts.struct({
            stash: v100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    v1030: new support_1.EventType(
        'Staking.Rewarded',
        support_1.sts.struct({
            stash: v1030.AccountId32,
            dest: v1030.RewardDestination,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.slashed = {
    name: 'Staking.Slashed',
    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    enjinV100: new support_1.EventType(
        'Staking.Slashed',
        support_1.sts.struct({
            staker: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.slashReported = {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    enjinV100: new support_1.EventType(
        'Staking.SlashReported',
        support_1.sts.struct({
            validator: enjinV100.AccountId32,
            fraction: enjinV100.Perbill,
            slashEra: support_1.sts.number(),
        })
    ),
}
exports.oldSlashingReportDiscarded = {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    enjinV100: new support_1.EventType(
        'Staking.OldSlashingReportDiscarded',
        support_1.sts.struct({
            sessionIndex: support_1.sts.number(),
        })
    ),
}
exports.stakersElected = {
    name: 'Staking.StakersElected',
    /**
     * A new set of stakers was elected.
     */
    enjinV100: new support_1.EventType('Staking.StakersElected', support_1.sts.unit()),
}
exports.bonded = {
    name: 'Staking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     *
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    enjinV100: new support_1.EventType(
        'Staking.Bonded',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.unbonded = {
    name: 'Staking.Unbonded',
    /**
     * An account has unbonded this amount.
     */
    enjinV100: new support_1.EventType(
        'Staking.Unbonded',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.withdrawn = {
    name: 'Staking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    enjinV100: new support_1.EventType(
        'Staking.Withdrawn',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.kicked = {
    name: 'Staking.Kicked',
    /**
     * A nominator has been kicked from a validator.
     */
    enjinV100: new support_1.EventType(
        'Staking.Kicked',
        support_1.sts.struct({
            nominator: enjinV100.AccountId32,
            stash: enjinV100.AccountId32,
        })
    ),
}
exports.stakingElectionFailed = {
    name: 'Staking.StakingElectionFailed',
    /**
     * The election failed. No new era is planned.
     */
    enjinV100: new support_1.EventType('Staking.StakingElectionFailed', support_1.sts.unit()),
}
exports.chilled = {
    name: 'Staking.Chilled',
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    enjinV100: new support_1.EventType(
        'Staking.Chilled',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
        })
    ),
}
exports.payoutStarted = {
    name: 'Staking.PayoutStarted',
    /**
     * The stakers' rewards are getting paid.
     */
    enjinV100: new support_1.EventType(
        'Staking.PayoutStarted',
        support_1.sts.struct({
            eraIndex: support_1.sts.number(),
            validatorStash: enjinV100.AccountId32,
        })
    ),
}
exports.validatorPrefsSet = {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    enjinV100: new support_1.EventType(
        'Staking.ValidatorPrefsSet',
        support_1.sts.struct({
            stash: enjinV100.AccountId32,
            prefs: enjinV100.ValidatorPrefs,
        })
    ),
}
exports.forceEra = {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    enjinV100: new support_1.EventType(
        'Staking.ForceEra',
        support_1.sts.struct({
            mode: enjinV100.Forcing,
        })
    ),
}
exports.snapshotVotersSizeExceeded = {
    name: 'Staking.SnapshotVotersSizeExceeded',
    /**
     * Voters size limit reached.
     */
    enjinV1032: new support_1.EventType(
        'Staking.SnapshotVotersSizeExceeded',
        support_1.sts.struct({
            size: support_1.sts.number(),
        })
    ),
}
exports.snapshotTargetsSizeExceeded = {
    name: 'Staking.SnapshotTargetsSizeExceeded',
    /**
     * Targets size limit reached.
     */
    enjinV1032: new support_1.EventType(
        'Staking.SnapshotTargetsSizeExceeded',
        support_1.sts.struct({
            size: support_1.sts.number(),
        })
    ),
}
exports.controllerBatchDeprecated = {
    name: 'Staking.ControllerBatchDeprecated',
    /**
     * Report of a controller batch deprecation.
     */
    enjinV1032: new support_1.EventType(
        'Staking.ControllerBatchDeprecated',
        support_1.sts.struct({
            failures: support_1.sts.number(),
        })
    ),
}
