'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.memberExchanged = exports.voted = exports.memberRemoved = exports.rankChanged = exports.memberAdded = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.memberAdded = {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    enjinV100: new support_1.EventType(
        'FellowshipCollective.MemberAdded',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
        })
    ),
}
exports.rankChanged = {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    enjinV100: new support_1.EventType(
        'FellowshipCollective.RankChanged',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            rank: support_1.sts.number(),
        })
    ),
}
exports.memberRemoved = {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    enjinV100: new support_1.EventType(
        'FellowshipCollective.MemberRemoved',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            rank: support_1.sts.number(),
        })
    ),
}
exports.voted = {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    enjinV100: new support_1.EventType(
        'FellowshipCollective.Voted',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            poll: support_1.sts.number(),
            vote: enjinV100.VoteRecord,
            tally: enjinV100.Type_590,
        })
    ),
}
exports.memberExchanged = {
    name: 'FellowshipCollective.MemberExchanged',
    /**
     * The member `who` had their `AccountId` changed to `new_who`.
     */
    enjinV1032: new support_1.EventType(
        'FellowshipCollective.MemberExchanged',
        support_1.sts.struct({
            who: enjinV1032.AccountId32,
            newWho: enjinV1032.AccountId32,
        })
    ),
}
