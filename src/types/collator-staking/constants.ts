import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const maxInvulnerables = {
    /**
     *  Maximum number of invulnerables.
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.MaxInvulnerables', sts.number()),
}

export const maxCandidates = {
    /**
     *  The number of selected collators
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.MaxCandidates', sts.number()),
}

export const maxCollators = {
    /**
     *  The number of selected collators
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.MaxCollators', sts.number()),
}

export const maxNominationsPerCollator = {
    /**
     *  Maximum nominators per collator
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.MaxNominationsPerCollator', sts.number()),
}

export const minNominationStakeAmount = {
    /**
     *  Minimum nomination stake required
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.MinNominationStakeAmount', sts.bigint()),
}

export const collatorPoolAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for the collator pool
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.CollatorPoolAccountId', matrixEnjinV603.AccountId32),
}

export const feeDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for the fee distributor
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.FeeDistributorAccountId', matrixEnjinV603.AccountId32),
}

export const defaultMinCollatorStake = {
    /**
     *  The default minimum collator stake amount
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.DefaultMinCollatorStake', sts.bigint()),
}

export const sessionPeriod = {
    /**
     *  The total number of blocks within a session
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.SessionPeriod', sts.number()),
}

export const collatorExitThreshold = {
    /**
     *  The number of rounds that have to pass after the collator has requested
     *  unbonding for the bonded stake to be released.
     */
    matrixEnjinV603: new ConstantType('CollatorStaking.CollatorExitThreshold', sts.number()),
}
