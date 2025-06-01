import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const newAuthorities =  {
    name: 'Grandpa.NewAuthorities',
    /**
     * New authority set has been applied.
     */
    enjinV100: new EventType(
        'Grandpa.NewAuthorities',
        sts.struct({
            authoritySet: sts.array(() => sts.tuple(() => [enjinV100.Public, sts.bigint()])),
        })
    ),
}

export const paused =  {
    name: 'Grandpa.Paused',
    /**
     * Current authority set has been paused.
     */
    enjinV100: new EventType(
        'Grandpa.Paused',
        sts.unit()
    ),
}

export const resumed =  {
    name: 'Grandpa.Resumed',
    /**
     * Current authority set has been resumed.
     */
    enjinV100: new EventType(
        'Grandpa.Resumed',
        sts.unit()
    ),
}
