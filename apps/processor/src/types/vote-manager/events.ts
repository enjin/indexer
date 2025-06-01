import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV120 from '../enjinV120'

export const voted =  {
    name: 'VoteManager.Voted',
    /**
     * An account has voted in a referendum
     */
    enjinV120: new EventType(
        'VoteManager.Voted',
        sts.struct({
            voter: enjinV120.AccountId32,
            pollIndex: sts.number(),
            vote: enjinV120.AccountVote,
        })
    ),
}
