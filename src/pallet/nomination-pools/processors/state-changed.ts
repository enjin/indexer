import { Sns } from '../../../util/sns'
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

    ctx.log.info(`Pool ${data.poolId.toString()} is being destroyed ${item.name}`)
    
    if (data.newState.__kind === PoolState.Destroying) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                pool: data.poolId.toString(),
                state: data.newState.__kind,
                extrinsic: item.extrinsic.id,
            },
        })
    }
}
