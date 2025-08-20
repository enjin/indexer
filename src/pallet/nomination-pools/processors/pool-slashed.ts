import { Block, CommonContext, EventItem } from '~/contexts'
import { AccountTokenEvent, Event as EventModel, PoolSlash } from '~/model'
import { SnsEvent } from '~/util/sns'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import * as mappings from '~/pallet/index'

export async function poolSlashed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | SnsEvent | undefined] | undefined> {
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

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            balance: data.balance,
            extrinsic: item.extrinsic.id,
        },
    }

    return [mappings.nominationPools.events.poolSlashedEventModel(item, data), snsEvent]
}
