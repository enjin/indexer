import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { NominationPool, PoolState } from '../../model'
import * as mappings from './../../mappings'

export async function stateChanged(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.stateChanged(item)

    if (!eventData) return undefined

    const pool = await ctx.store.findOneByOrFail(NominationPool, { id: eventData.poolId.toString() })
    pool.state = PoolState[eventData.newState.__kind]

    await ctx.store.save(pool)

    return undefined
}
