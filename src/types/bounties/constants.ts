import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const bountyDepositBase = {
    /**
     *  The amount held on deposit for placing a bounty proposal.
     */
    matrixEnjinV603: new ConstantType('Bounties.BountyDepositBase', sts.bigint()),
}

export const bountyDepositPayoutDelay = {
    /**
     *  The delay period for which a bounty beneficiary need to wait before claim the payout.
     */
    matrixEnjinV603: new ConstantType('Bounties.BountyDepositPayoutDelay', sts.number()),
}

export const bountyUpdatePeriod = {
    /**
     *  Bounty duration in blocks.
     */
    matrixEnjinV603: new ConstantType('Bounties.BountyUpdatePeriod', sts.number()),
}

export const curatorDepositMultiplier = {
    /**
     *  The curator deposit is calculated as a percentage of the curator fee.
     *
     *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
     *  `CuratorDepositMin`.
     */
    matrixEnjinV603: new ConstantType('Bounties.CuratorDepositMultiplier', matrixEnjinV603.Permill),
}

export const curatorDepositMax = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new ConstantType(
        'Bounties.CuratorDepositMax',
        sts.option(() => sts.bigint())
    ),
}

export const curatorDepositMin = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new ConstantType(
        'Bounties.CuratorDepositMin',
        sts.option(() => sts.bigint())
    ),
}

export const bountyValueMinimum = {
    /**
     *  Minimum value for a bounty.
     */
    matrixEnjinV603: new ConstantType('Bounties.BountyValueMinimum', sts.bigint()),
}

export const dataDepositPerByte = {
    /**
     *  The amount held on deposit per byte within the tip report reason or bounty description.
     */
    matrixEnjinV603: new ConstantType('Bounties.DataDepositPerByte', sts.bigint()),
}

export const maximumReasonLength = {
    /**
     *  Maximum acceptable reason length.
     *
     *  Benchmarks depend on this value, be sure to update weights file when changing this value
     */
    matrixEnjinV603: new ConstantType('Bounties.MaximumReasonLength', sts.number()),
}
