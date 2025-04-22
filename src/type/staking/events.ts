import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const eraPaid = {
    name: 'Staking.EraPaid',
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    enjinV100: new EventType(
        'Staking.EraPaid',
        sts.struct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        })
    ),
}

export const rewarded = {
    name: 'Staking.Rewarded',
    /**
     * The nominator has been rewarded by this amount.
     */
    enjinV100: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    enjinV1032: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: enjinV1032.AccountId32,
            dest: enjinV1032.RewardDestination,
            amount: sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount.
     */
    v100: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v100.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    v1030: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v1030.AccountId32,
            dest: v1030.RewardDestination,
            amount: sts.bigint(),
        })
    ),
}

export const slashed = {
    name: 'Staking.Slashed',
    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    enjinV100: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashReported = {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    enjinV100: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: enjinV100.AccountId32,
            fraction: enjinV100.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const oldSlashingReportDiscarded = {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    enjinV100: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const stakersElected = {
    name: 'Staking.StakersElected',
    /**
     * A new set of stakers was elected.
     */
    enjinV100: new EventType('Staking.StakersElected', sts.unit()),
}

export const bonded = {
    name: 'Staking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     *
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    enjinV100: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded = {
    name: 'Staking.Unbonded',
    /**
     * An account has unbonded this amount.
     */
    enjinV100: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn = {
    name: 'Staking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    enjinV100: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked = {
    name: 'Staking.Kicked',
    /**
     * A nominator has been kicked from a validator.
     */
    enjinV100: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: enjinV100.AccountId32,
            stash: enjinV100.AccountId32,
        })
    ),
}

export const stakingElectionFailed = {
    name: 'Staking.StakingElectionFailed',
    /**
     * The election failed. No new era is planned.
     */
    enjinV100: new EventType('Staking.StakingElectionFailed', sts.unit()),
}

export const chilled = {
    name: 'Staking.Chilled',
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    enjinV100: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: enjinV100.AccountId32,
        })
    ),
}

export const payoutStarted = {
    name: 'Staking.PayoutStarted',
    /**
     * The stakers' rewards are getting paid.
     */
    enjinV100: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: enjinV100.AccountId32,
        })
    ),
}

export const validatorPrefsSet = {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    enjinV100: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: enjinV100.AccountId32,
            prefs: enjinV100.ValidatorPrefs,
        })
    ),
}

export const forceEra = {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    enjinV100: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: enjinV100.Forcing,
        })
    ),
}

export const snapshotVotersSizeExceeded = {
    name: 'Staking.SnapshotVotersSizeExceeded',
    /**
     * Voters size limit reached.
     */
    enjinV1032: new EventType(
        'Staking.SnapshotVotersSizeExceeded',
        sts.struct({
            size: sts.number(),
        })
    ),
}

export const snapshotTargetsSizeExceeded = {
    name: 'Staking.SnapshotTargetsSizeExceeded',
    /**
     * Targets size limit reached.
     */
    enjinV1032: new EventType(
        'Staking.SnapshotTargetsSizeExceeded',
        sts.struct({
            size: sts.number(),
        })
    ),
}

export const controllerBatchDeprecated = {
    name: 'Staking.ControllerBatchDeprecated',
    /**
     * Report of a controller batch deprecation.
     */
    enjinV1032: new EventType(
        'Staking.ControllerBatchDeprecated',
        sts.struct({
            failures: sts.number(),
        })
    ),
}
