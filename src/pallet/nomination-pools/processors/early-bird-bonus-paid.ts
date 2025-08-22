import { Block, CommonContext, EventItem } from '~/contexts'
import { EarlyBirdBonus } from '~/model'
import { updateEarlyBirdInfo, updatePool } from '~/pallet/nomination-pools/processors/pool'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function earlyBirdBonusPaid(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.earlyBirdBonusPaid(item)
    const pool = await updatePool(ctx, block, data.poolId.toString())

    const bonus = await mappings.nominationPools.storage.poolBonusInfo(block, data.poolId)
    await updateEarlyBirdInfo(ctx, block)

    if (bonus) {
        pool.earlyBirdBonus = new EarlyBirdBonus({
            lastPaymentId: bonus.lastPaymentId,
            shareCaptureBlock: bonus.shareCaptureBlock,
            amount: bonus.amount,
            totalPaid: 'totalPaid' in bonus ? (bonus.totalPaid as bigint) : 0n,
        })
    }

    await ctx.store.save(pool)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            pool: data.poolId.toString(),
            paymentId: data.paymentId,
            extrinsic: item.extrinsic.id,
        },
    }

    return [mappings.nominationPools.events.earlyBirdBonusPaidEventModel(item, data), snsEvent]
}
