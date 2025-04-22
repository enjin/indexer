import { Block, CommonContext, EventItem } from '../../../contexts'
import { NominationPool, PoolState } from '../../../model'
import * as mappings from '../../index'

export async function stateChanged(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.stateChanged(item)

    const pool = await ctx.store.findOneByOrFail(NominationPool, { id: eventData.poolId.toString() })
    pool.state = PoolState[eventData.newState.__kind]

    await ctx.store.save(pool)
}
