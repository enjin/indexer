import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const revenueInfoRequested = {
    name: 'Coretime.RevenueInfoRequested',
    /**
     * The broker chain has asked for revenue information for a specific block.
     */
    enjinV1062: new EventType(
        'Coretime.RevenueInfoRequested',
        sts.struct({
            when: sts.number(),
        })
    ),
}

export const coreAssigned = {
    name: 'Coretime.CoreAssigned',
    /**
     * A core has received a new assignment from the broker chain.
     */
    enjinV1062: new EventType(
        'Coretime.CoreAssigned',
        sts.struct({
            core: enjinV1062.V8CoreIndex,
        })
    ),
}
