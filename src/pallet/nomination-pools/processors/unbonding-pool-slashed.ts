import { IsNull, Not } from 'typeorm'
import { Block, CommonContext, EventItem } from '~/contexts'
import { PoolMember } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { unbondingErasAt } from '~/pallet/nomination-pools/processors/unbonding-eras'

/**
 * `UnbondingPoolSlashed` lowers the balance of one era's unbond pool without touching anyone's points, so every
 * member unbonding into that era withdraws less. Re-read those members' chunks, which are priced against the
 * slashed pool. Emitted from the staking slash hooks, so there is usually no extrinsic.
 */
export async function unbondingPoolSlashed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.nominationPools.events.unbondingPoolSlashed(item)
    const poolId = data.poolId.toString()

    await updatePool(ctx, block, poolId)

    const unbonding = await ctx.store.find(PoolMember, {
        where: { pool: { id: poolId }, unbondingEras: Not(IsNull()) },
        relations: { account: true },
    })
    const affected = unbonding.filter((member) => member.unbondingEras?.some((chunk) => chunk.era === data.era))

    for (const member of affected) {
        member.unbondingEras = await unbondingErasAt(block, data.poolId, member.account.id)
    }

    if (affected.length > 0) {
        await ctx.store.save(affected)
    }

    return mappings.nominationPools.events.unbondingPoolSlashedEventModel(item, data)
}
