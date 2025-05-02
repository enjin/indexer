'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.votesToUnlock = exports.voteCurrencies = void 0
var support_1 = require('../support')
var enjinV120 = require('../enjinV120')
exports.voteCurrencies = {
    /**
     *  The currency used by `AccountId` to vote in Poll with
     *  `PollIndex`
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV120: new support_1.StorageType(
        'VoteManager.VoteCurrencies',
        'Optional',
        [enjinV120.AccountId32, support_1.sts.number()],
        enjinV120.VoteCurrency
    ),
}
exports.votesToUnlock = {
    /**
     *  The currency used by `AccountId` to vote in referendum with
     *  `ReferendumIndex`
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV120: new support_1.StorageType(
        'VoteManager.VotesToUnlock',
        'Optional',
        [enjinV120.AccountId32, support_1.sts.number()],
        enjinV120.BalanceToUnlock
    ),
}
