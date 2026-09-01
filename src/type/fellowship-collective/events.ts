import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1040 from '../matrixV1040'

export const memberAdded = {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    matrixV1040: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: matrixV1040.AccountId32,
        })
    ),
}

export const rankChanged = {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    matrixV1040: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: matrixV1040.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved = {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    matrixV1040: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: matrixV1040.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const voted = {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    matrixV1040: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: matrixV1040.AccountId32,
            poll: sts.number(),
            vote: matrixV1040.VoteRecord,
            tally: matrixV1040.Type_613,
        })
    ),
}

export const memberExchanged = {
    name: 'FellowshipCollective.MemberExchanged',
    /**
     * The member `who` had their `AccountId` changed to `new_who`.
     */
    matrixV1040: new EventType(
        'FellowshipCollective.MemberExchanged',
        sts.struct({
            who: matrixV1040.AccountId32,
            newWho: matrixV1040.AccountId32,
        })
    ),
}
