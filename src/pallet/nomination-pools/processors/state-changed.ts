import { Block, CommonContext, EventItem } from '../../../contexts'
import { NominationPool, PoolState } from '../../../model'
import * as mappings from '../../index'

export async function stateChanged(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.stateChanged(item)

    const pool = await ctx.store.findOneBy(NominationPool, { id: data.poolId.toString() })
    if (!pool) return undefined

    pool.state = PoolState[data.newState.__kind]
    await ctx.store.save(pool)
}
