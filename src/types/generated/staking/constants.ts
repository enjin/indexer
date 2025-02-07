import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const maxNominations =  {
    /**
     *  Maximum number of nominations per nominator.
     */
    enjinV100: new ConstantType(
        'Staking.MaxNominations',
        sts.number()
    ),
}

export const historyDepth =  {
    /**
     *  Number of eras to keep in history.
     * 
     *  Following information is kept for eras in `[current_era -
     *  HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
     *  `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
     *  `ErasTotalStake`, `ErasStartSessionIndex`,
     *  `StakingLedger.claimed_rewards`.
     * 
     *  Must be more than the number of eras delayed by session.
     *  I.e. active era must always be in history. I.e. `active_era >
     *  current_era - history_depth` must be guaranteed.
     * 
     *  If migrating an existing pallet from storage value to config value,
     *  this should be set to same value or greater as in storage.
     * 
     *  Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
     *  item `StakingLedger.claimed_rewards`. Setting this value lower than
     *  the existing value can lead to inconsistencies in the
     *  `StakingLedger` and will need to be handled properly in a migration.
     *  The test `reducing_history_depth_abrupt` shows this effect.
     */
    enjinV100: new ConstantType(
        'Staking.HistoryDepth',
        sts.number()
    ),
}

export const sessionsPerEra =  {
    /**
     *  Number of sessions per era.
     */
    enjinV100: new ConstantType(
        'Staking.SessionsPerEra',
        sts.number()
    ),
}

export const bondingDuration =  {
    /**
     *  Number of eras that staked funds must remain bonded for.
     */
    enjinV100: new ConstantType(
        'Staking.BondingDuration',
        sts.number()
    ),
}

export const slashDeferDuration =  {
    /**
     *  Number of eras that slashes are deferred by, after computation.
     * 
     *  This should be less than the bonding duration. Set to 0 if slashes
     *  should be applied immediately, without opportunity for intervention.
     */
    enjinV100: new ConstantType(
        'Staking.SlashDeferDuration',
        sts.number()
    ),
}

export const maxNominatorRewardedPerValidator =  {
    /**
     *  The maximum number of nominators rewarded for each validator.
     * 
     *  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
     *  claim their reward. This used to limit the i/o cost for the nominator payout.
     */
    enjinV100: new ConstantType(
        'Staking.MaxNominatorRewardedPerValidator',
        sts.number()
    ),
}

export const maxUnlockingChunks =  {
    /**
     *  The maximum number of `unlocking` chunks a [`StakingLedger`] can
     *  have. Effectively determines how many unique eras a staker may be
     *  unbonding in.
     * 
     *  Note: `MaxUnlockingChunks` is used as the upper bound for the
     *  `BoundedVec` item `StakingLedger.unlocking`. Setting this value
     *  lower than the existing value can lead to inconsistencies in the
     *  `StakingLedger` and will need to be handled properly in a runtime
     *  migration. The test `reducing_max_unlocking_chunks_abrupt` shows
     *  this effect.
     */
    enjinV100: new ConstantType(
        'Staking.MaxUnlockingChunks',
        sts.number()
    ),
}

export const maxExposurePageSize =  {
    /**
     *  The maximum size of each `T::ExposurePage`.
     * 
     *  An `ExposurePage` is weakly bounded to a maximum of `MaxExposurePageSize`
     *  nominators.
     * 
     *  For older non-paged exposure, a reward payout was restricted to the top
     *  `MaxExposurePageSize` nominators. This is to limit the i/o cost for the
     *  nominator payout.
     * 
     *  Note: `MaxExposurePageSize` is used to bound `ClaimedRewards` and is unsafe to reduce
     *  without handling it in a migration.
     */
    enjinV1032: new ConstantType(
        'Staking.MaxExposurePageSize',
        sts.number()
    ),
}
