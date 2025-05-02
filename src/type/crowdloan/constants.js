'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.removeKeysLimit = exports.minContribution = exports.palletId = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.palletId = {
    /**
     *  `PalletId` for the crowdloan pallet. An appropriate value could be `PalletId(*b"py/cfund")`
     */
    enjinV100: new support_1.ConstantType('Crowdloan.PalletId', enjinV100.PalletId),
}
exports.minContribution = {
    /**
     *  The minimum amount that may be contributed into a crowdloan. Should almost certainly be at
     *  least `ExistentialDeposit`.
     */
    enjinV100: new support_1.ConstantType('Crowdloan.MinContribution', support_1.sts.bigint()),
}
exports.removeKeysLimit = {
    /**
     *  Max number of storage keys to remove per extrinsic call.
     */
    enjinV100: new support_1.ConstantType('Crowdloan.RemoveKeysLimit', support_1.sts.number()),
}
