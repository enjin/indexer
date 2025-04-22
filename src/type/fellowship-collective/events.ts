import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const memberAdded = {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    enjinV100: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: enjinV100.AccountId32,
        })
    ),
}

export const rankChanged = {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    enjinV100: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: enjinV100.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved = {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    enjinV100: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: enjinV100.AccountId32,
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
    enjinV100: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: enjinV100.AccountId32,
            poll: sts.number(),
            vote: enjinV100.VoteRecord,
            tally: enjinV100.Type_590,
        })
    ),
}

export const memberExchanged = {
    name: 'FellowshipCollective.MemberExchanged',
    /**
     * The member `who` had their `AccountId` changed to `new_who`.
     */
    enjinV1032: new EventType(
        'FellowshipCollective.MemberExchanged',
        sts.struct({
            who: enjinV1032.AccountId32,
            newWho: enjinV1032.AccountId32,
        })
    ),
}
