import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const reserveIdentifier = {
    /**
     *  The id used for making reservations with this pallet
     */
    enjinV100: new ConstantType('StakeExchange.ReserveIdentifier', sts.bytes()),
}

export const maxFilteredTokenCount = {
    /**
     *  The maximum number of tokens that can be whitelisted/blacklisted
     */
    enjinV100: new ConstantType('StakeExchange.MaxFilteredTokenCount', sts.number()),
}

export const offerDeposit = {
    /**
     *  The deposit for creating an offer
     */
    enjinV120: new ConstantType('StakeExchange.OfferDeposit', sts.bigint()),
}

export const buyDustThreshold = {
    /**
     *  When buying, if less than this amount is staked, it will send the remaining balance
     */
    v1060: new ConstantType('StakeExchange.BuyDustThreshold', sts.bigint()),
}
