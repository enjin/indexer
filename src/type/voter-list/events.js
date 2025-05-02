'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.scoreUpdated = exports.rebagged = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.rebagged = {
    name: 'VoterList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    enjinV100: new support_1.EventType(
        'VoterList.Rebagged',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            from: support_1.sts.bigint(),
            to: support_1.sts.bigint(),
        })
    ),
}
exports.scoreUpdated = {
    name: 'VoterList.ScoreUpdated',
    /**
     * Updated the score of some account to the given amount.
     */
    enjinV100: new support_1.EventType(
        'VoterList.ScoreUpdated',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            newScore: support_1.sts.bigint(),
        })
    ),
}
