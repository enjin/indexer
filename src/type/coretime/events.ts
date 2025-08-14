import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const revenueInfoRequested = {
    name: 'Coretime.RevenueInfoRequested',
    /**
     * The broker chain has asked for revenue information for a specific block.
     */
    v1060: new EventType(
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
    v1060: new EventType(
        'Coretime.CoreAssigned',
        sts.struct({
            core: v1060.V8CoreIndex,
        })
    ),
}
