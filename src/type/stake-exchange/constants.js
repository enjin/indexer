'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.offerDeposit = exports.maxFilteredTokenCount = exports.reserveIdentifier = void 0
var support_1 = require('../support')
exports.reserveIdentifier = {
    /**
     *  The id used for making reservations with this pallet
     */
    enjinV100: new support_1.ConstantType('StakeExchange.ReserveIdentifier', support_1.sts.bytes()),
}
exports.maxFilteredTokenCount = {
    /**
     *  The maximum number of tokens that can be whitelisted/blacklisted
     */
    enjinV100: new support_1.ConstantType('StakeExchange.MaxFilteredTokenCount', support_1.sts.number()),
}
exports.offerDeposit = {
    /**
     *  The deposit for creating an offer
     */
    enjinV120: new support_1.ConstantType('StakeExchange.OfferDeposit', support_1.sts.bigint()),
}
