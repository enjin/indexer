import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { NominationPool, PoolState } from '../../../model'

function getEventData(event: EventItem) {
    if (events.nominationPools.stateChanged.enjinV100.is(event)) {
        return events.nominationPools.stateChanged.enjinV100.decode(event)
    }

    if (events.nominationPools.stateChanged.v103.is(event)) {
        return events.nominationPools.stateChanged.v103.decode(event)
    }

    if (events.nominationPools.stateChanged.v100.is(event)) {
        return events.nominationPools.stateChanged.v100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.stateChanged.name)
}

export async function stateChanged(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const pool = await ctx.store.findOneByOrFail(NominationPool, { id: eventData.poolId.toString() })
    pool.state = PoolState[eventData.newState.__kind]

    await ctx.store.save(pool)

    return undefined
}
