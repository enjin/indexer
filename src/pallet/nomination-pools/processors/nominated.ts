import { Block, CommonContext, EventItem } from '~/contexts'
import { NominationPool } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { replacePoolValidators } from '~/pallet/nomination-pools/processors/pool-validators'

export async function nominated(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.nominated(item)

    const pool = await ctx.store.findOneByOrFail<NominationPool>(NominationPool, { id: data.poolId.toString() })
    const accounts = await Promise.all(data.validators.map((v) => getOrCreateAccount(ctx, v)))

    await replacePoolValidators(ctx, pool, accounts)

    return mappings.nominationPools.events.nominatedEventModel(item, data)
}
