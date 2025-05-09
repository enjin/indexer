'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nextFundIndex = exports.endingsCount = exports.newRaise = exports.funds = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.funds = {
    /**
     *  Info on all of the funds.
     */
    enjinV100: new support_1.StorageType('Crowdloan.Funds', 'Optional', [enjinV100.Id], enjinV100.FundInfo),
}
exports.newRaise = {
    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    enjinV100: new support_1.StorageType(
        'Crowdloan.NewRaise',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.endingsCount = {
    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    enjinV100: new support_1.StorageType('Crowdloan.EndingsCount', 'Default', [], support_1.sts.number()),
}
exports.nextFundIndex = {
    /**
     *  Tracker for the next available fund index
     */
    enjinV100: new support_1.StorageType('Crowdloan.NextFundIndex', 'Default', [], support_1.sts.number()),
}
