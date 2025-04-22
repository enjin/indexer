import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const rebagged = {
    name: 'VoterList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    enjinV100: new EventType(
        'VoterList.Rebagged',
        sts.struct({
            who: enjinV100.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}

export const scoreUpdated = {
    name: 'VoterList.ScoreUpdated',
    /**
     * Updated the score of some account to the given amount.
     */
    enjinV100: new EventType(
        'VoterList.ScoreUpdated',
        sts.struct({
            who: enjinV100.AccountId32,
            newScore: sts.bigint(),
        })
    ),
}
