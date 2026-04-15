import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1050 from '../enjinV1050'
import * as enjinV1062 from '../enjinV1062'
import * as v1070 from '../v1070'

export const delegated = {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    enjinV100: new EventType('ConvictionVoting.Delegated', sts.tuple([enjinV100.AccountId32, enjinV100.AccountId32])),
    /**
     * An account has delegated their vote to another account.
     */
    v1070: new EventType(
        'ConvictionVoting.Delegated',
        sts.struct({
            who: v1070.AccountId32,
            target: v1070.AccountId32,
            class: sts.number(),
            currency: v1070.VoteCurrency,
        })
    ),
}

export const undelegated = {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    enjinV100: new EventType('ConvictionVoting.Undelegated', enjinV100.AccountId32),
    /**
     * An account has canceled a previous delegation operation.
     */
    v1070: new EventType(
        'ConvictionVoting.Undelegated',
        sts.struct({
            who: v1070.AccountId32,
            class: sts.number(),
            currency: v1070.VoteCurrency,
        })
    ),
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
    /**
     * An account has voted
     */
    v1070: new EventType(
        'ConvictionVoting.Voted',
        sts.struct({
            who: v1070.AccountId32,
            vote: v1070.AccountVote,
            pollIndex: sts.number(),
            currency: v1070.VoteCurrency,
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
    /**
     * A vote has been removed
     */
    v1070: new EventType(
        'ConvictionVoting.VoteRemoved',
        sts.struct({
            who: v1070.AccountId32,
            vote: v1070.AccountVote,
            pollIndex: sts.number(),
            currency: v1070.VoteCurrency,
        })
    ),
}

export const voteUnlocked = {
    name: 'ConvictionVoting.VoteUnlocked',
    /**
     * The lockup period of a conviction vote expired, and the funds have been unlocked.
     */
    enjinV1062: new EventType(
        'ConvictionVoting.VoteUnlocked',
        sts.struct({
            who: enjinV1062.AccountId32,
            class: sts.number(),
        })
    ),
    /**
     * The lockup period of a conviction vote expired, and the funds have been unlocked.
     */
    v1070: new EventType(
        'ConvictionVoting.VoteUnlocked',
        sts.struct({
            who: v1070.AccountId32,
            class: sts.number(),
            currency: v1070.VoteCurrency,
        })
    ),
}

export const migrationStep = {
    name: 'ConvictionVoting.MigrationStep',
    v1070: new EventType(
        'ConvictionVoting.MigrationStep',
        sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: sts.number(),
            phase: sts.number(),
        })
    ),
}
