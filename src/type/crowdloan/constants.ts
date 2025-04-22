import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const palletId = {
    /**
     *  `PalletId` for the crowdloan pallet. An appropriate value could be `PalletId(*b"py/cfund")`
     */
    enjinV100: new ConstantType('Crowdloan.PalletId', enjinV100.PalletId),
}

export const minContribution = {
    /**
     *  The minimum amount that may be contributed into a crowdloan. Should almost certainly be at
     *  least `ExistentialDeposit`.
     */
    enjinV100: new ConstantType('Crowdloan.MinContribution', sts.bigint()),
}

export const removeKeysLimit = {
    /**
     *  Max number of storage keys to remove per extrinsic call.
     */
    enjinV100: new ConstantType('Crowdloan.RemoveKeysLimit', sts.number()),
}
