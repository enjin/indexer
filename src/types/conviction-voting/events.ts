import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1050 from '../v1050'

export const delegated = {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    enjinV100: new EventType('ConvictionVoting.Delegated', sts.tuple([enjinV100.AccountId32, enjinV100.AccountId32])),
}

export const undelegated = {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    enjinV100: new EventType('ConvictionVoting.Undelegated', enjinV100.AccountId32),
}

export const voted = {
    name: 'ConvictionVoting.Voted',
    /**
     * An account that has voted
     */
    v1050: new EventType(
        'ConvictionVoting.Voted',
        sts.struct({
            who: v1050.AccountId32,
            vote: v1050.AccountVote,
        })
    ),
}

export const voteRemoved = {
    name: 'ConvictionVoting.VoteRemoved',
    /**
     * A vote that been removed
     */
    v1050: new EventType(
        'ConvictionVoting.VoteRemoved',
        sts.struct({
            who: v1050.AccountId32,
            vote: v1050.AccountVote,
        })
    ),
}
