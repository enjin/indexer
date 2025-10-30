import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1030 from '../matrixV1030'

export const proposalBond = {
    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.ProposalBond', matrixEnjinV603.Permill),
}

export const proposalBondMinimum = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.ProposalBondMinimum', sts.bigint()),
}

export const proposalBondMaximum = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new ConstantType(
        'CommunityPool.ProposalBondMaximum',
        sts.option(() => sts.bigint())
    ),
}

export const spendPeriod = {
    /**
     *  Period between successive spends.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.SpendPeriod', sts.number()),
}

export const burn = {
    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.Burn', matrixEnjinV603.Permill),
}

export const palletId = {
    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.PalletId', matrixEnjinV603.PalletId),
}

export const maxApprovals = {
    /**
     *  The maximum number of approvals that can wait in the spending queue.
     *
     *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
     */
    matrixEnjinV603: new ConstantType('CommunityPool.MaxApprovals', sts.number()),
}

export const payoutPeriod = {
    /**
     *  The period during which an approved treasury spend has to be claimed.
     */
    matrixEnjinV1012: new ConstantType('CommunityPool.PayoutPeriod', sts.number()),
}

export const potAccount = {
    /**
     *  Gets this pallet's derived pot account.
     */
    matrixV1030: new ConstantType('CommunityPool.pot_account', matrixV1030.AccountId32),
}
