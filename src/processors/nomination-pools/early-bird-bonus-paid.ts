import { Block, CommonContext, EventItem } from '../../contexts'
import { EarlyBirdBonus } from '../../model'
import { updateEarlyBirdInfo, updatePool } from './pool'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'

export async function earlyBirdBonusPaid(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.earlyBirdBonusPaid(item)

    const pool = await updatePool(ctx, block, eventData.poolId.toString())

    const bonus = await mappings.nominationPools.storage.poolBonusInfo(block, eventData.poolId)
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

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            paymentId: eventData.paymentId,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.earlyBirdBonusPaidEventModel(item, eventData)
}
