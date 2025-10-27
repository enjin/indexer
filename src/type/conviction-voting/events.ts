import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1050 from '../enjinV1050'
import * as v1060 from '../v1060'

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
    enjinV1050: new EventType(
        'ConvictionVoting.Voted',
        sts.struct({
            who: enjinV1050.AccountId32,
            vote: enjinV1050.AccountVote,
        })
    ),
}

export const voteRemoved = {
    name: 'ConvictionVoting.VoteRemoved',
    /**
     * A vote that been removed
     */
    enjinV1050: new EventType(
        'ConvictionVoting.VoteRemoved',
        sts.struct({
            who: enjinV1050.AccountId32,
            vote: enjinV1050.AccountVote,
        })
    ),
}

export const voteUnlocked = {
    name: 'ConvictionVoting.VoteUnlocked',
    /**
     * The lockup period of a conviction vote expired, and the funds have been unlocked.
     */
    v1060: new EventType(
        'ConvictionVoting.VoteUnlocked',
        sts.struct({
            who: v1060.AccountId32,
            class: sts.number(),
        })
    ),
}
