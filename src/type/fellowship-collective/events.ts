import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const memberAdded = {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: matrixEnjinV1041.AccountId32,
        })
    ),
}

export const rankChanged = {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: matrixEnjinV1041.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved = {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: matrixEnjinV1041.AccountId32,
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
    matrixEnjinV1041: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: matrixEnjinV1041.AccountId32,
            poll: sts.number(),
            vote: matrixEnjinV1041.VoteRecord,
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const memberExchanged = {
    name: 'FellowshipCollective.MemberExchanged',
    /**
     * The member `who` had their `AccountId` changed to `new_who`.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipCollective.MemberExchanged',
        sts.struct({
            who: matrixEnjinV1041.AccountId32,
            newWho: matrixEnjinV1041.AccountId32,
        })
    ),
}
