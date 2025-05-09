'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.votingCleanup =
    exports.voting =
    exports.indexToId =
    exports.idToIndex =
    exports.members =
    exports.memberCount =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.memberCount = {
    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.MemberCount',
        'Default',
        [support_1.sts.number()],
        support_1.sts.number()
    ),
}
exports.members = {
    /**
     *  The current members of the collective.
     */
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.Members',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.MemberRecord
    ),
}
exports.idToIndex = {
    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.IdToIndex',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32],
        support_1.sts.number()
    ),
}
exports.indexToId = {
    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.IndexToId',
        'Optional',
        [support_1.sts.number(), support_1.sts.number()],
        enjinV100.AccountId32
    ),
}
exports.voting = {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.Voting',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32],
        enjinV100.VoteRecord
    ),
}
exports.votingCleanup = {
    enjinV100: new support_1.StorageType(
        'FellowshipCollective.VotingCleanup',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.bytes()
    ),
}
