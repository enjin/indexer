import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1060 from '../v1060'

export const proposalBond = {
    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    enjinV100: new ConstantType('Treasury.ProposalBond', enjinV100.Permill),
}

export const proposalBondMinimum = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    enjinV100: new ConstantType('Treasury.ProposalBondMinimum', sts.bigint()),
}

export const proposalBondMaximum = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    enjinV100: new ConstantType(
        'Treasury.ProposalBondMaximum',
        sts.option(() => sts.bigint())
    ),
}

export const spendPeriod = {
    /**
     *  Period between successive spends.
     */
    enjinV100: new ConstantType('Treasury.SpendPeriod', sts.number()),
}

export const burn = {
    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    enjinV100: new ConstantType('Treasury.Burn', enjinV100.Permill),
}

export const palletId = {
    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    enjinV100: new ConstantType('Treasury.PalletId', enjinV100.PalletId),
}

export const maxApprovals = {
    /**
     *  The maximum number of approvals that can wait in the spending queue.
     *
     *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
     */
    enjinV100: new ConstantType('Treasury.MaxApprovals', sts.number()),
}

export const payoutPeriod = {
    /**
     *  The period during which an approved treasury spend has to be claimed.
     */
    enjinV1032: new ConstantType('Treasury.PayoutPeriod', sts.number()),
}

export const potAccount = {
    /**
     *  Gets this pallet's derived pot account.
     */
    v1060: new ConstantType('Treasury.pot_account', v1060.AccountId32),
}
