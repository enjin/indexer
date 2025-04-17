import { Block, CommonContext, EventItem } from '../../contexts'
import { Event as EventModel, PoolSlash } from '../../model'
import { Sns } from '../../utils/sns'
import { updatePool } from './pool'
import * as mappings from './../../mappings'

export async function poolSlashed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.poolSlashed(item)

    const pool = await updatePool(ctx, block, eventData.poolId.toString())
    const slash = new PoolSlash({
        amount: eventData.balance,
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
            balance: eventData.balance,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.poolSlashedEventModel(item, eventData)
}
