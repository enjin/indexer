'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.voteRemoved = exports.voted = exports.undelegated = exports.delegated = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1050 = require('../enjinV1050')
exports.delegated = {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    enjinV100: new support_1.EventType(
        'ConvictionVoting.Delegated',
        support_1.sts.tuple([enjinV100.AccountId32, enjinV100.AccountId32])
    ),
}
exports.undelegated = {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    enjinV100: new support_1.EventType('ConvictionVoting.Undelegated', enjinV100.AccountId32),
}
exports.voted = {
    name: 'ConvictionVoting.Voted',
    /**
     * An account that has voted
     */
    enjinV1050: new support_1.EventType(
        'ConvictionVoting.Voted',
        support_1.sts.struct({
            who: enjinV1050.AccountId32,
            vote: enjinV1050.AccountVote,
        })
    ),
}
exports.voteRemoved = {
    name: 'ConvictionVoting.VoteRemoved',
    /**
     * A vote that been removed
     */
    enjinV1050: new support_1.EventType(
        'ConvictionVoting.VoteRemoved',
        support_1.sts.struct({
            who: enjinV1050.AccountId32,
            vote: enjinV1050.AccountVote,
        })
    ),
}
