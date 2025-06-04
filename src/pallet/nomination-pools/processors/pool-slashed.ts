import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, PoolSlash } from '../../../model'
import { Sns } from '../../../util/sns'
import { updatePool } from './pool'
import * as mappings from '../../index'

export async function poolSlashed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.poolSlashed(item)

    const pool = await updatePool(ctx, block, data.poolId.toString())
    const slash = new PoolSlash({
        amount: data.balance,
        appliedAt: new Date(block.timestamp ?? 0),
        appliedBlock: block.height,
    })

    pool.slashes.push(slash)
    await ctx.store.save(pool)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            balance: data.balance,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.poolSlashedEventModel(item, data)
}
