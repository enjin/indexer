'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.voted = void 0
var support_1 = require('../support')
var enjinV120 = require('../enjinV120')
exports.voted = {
    name: 'VoteManager.Voted',
    /**
     * An account has voted in a referendum
     */
    enjinV120: new support_1.EventType(
        'VoteManager.Voted',
        support_1.sts.struct({
            voter: enjinV120.AccountId32,
            pollIndex: support_1.sts.number(),
            vote: enjinV120.AccountVote,
        })
    ),
}
