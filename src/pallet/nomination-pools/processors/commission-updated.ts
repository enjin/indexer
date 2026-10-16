import { Block, CommonContext, EventItem } from '~/contexts'
import { NominationPool } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

/**
 * `CommissionUpdated` is emitted when lowering a pool's max commission clamps its current commission
 * (`Commission::try_update_max`).
 */
export async function commissionUpdated(
    ctx: CommonContext,
    _block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.nominationPools.events.commissionUpdated(item)

    const pool = await ctx.store.findOneBy(NominationPool, { id: data.poolId.toString() })
    if (pool) {
        pool.commission.current = data.current ?? null
        await ctx.store.save(pool)
    }

    return mappings.nominationPools.events.commissionUpdatedEventModel(item, data)
}
