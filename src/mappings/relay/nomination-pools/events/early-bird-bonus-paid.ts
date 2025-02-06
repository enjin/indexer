import { events, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, EarlyBirdBonus, Extrinsic, NominationPoolsEarlyBirdBonusPaid } from '../../../model'
import { updateEarlyBirdInfo, updatePool } from '../pool'
import { Sns } from '../../../common/sns'

function getBonusInfo(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.poolBonusInfos.enjinV1023.is(block)) {
        return storage.nominationPools.poolBonusInfos.enjinV1023.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.enjinV1021.is(block)) {
        return storage.nominationPools.poolBonusInfos.enjinV1021.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.v1023.is(block)) {
        return storage.nominationPools.poolBonusInfos.v1023.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.v1021.is(block)) {
        return storage.nominationPools.poolBonusInfos.v1021.get(block, poolId)
    }

    throw new UnknownVersionError('NominationPools.PoolBonusInfos')
}

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusPaid.enjinV1023.is(event)) {
        return events.nominationPools.earlyBirdBonusPaid.enjinV1023.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusPaid.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaid({
            pool: data.poolId.toString(),
            paymentId: data.paymentId,
            totalAccounts: data.totalAccounts,
        }),
    })
}

export async function earlyBirdBonusPaid(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const pool = await updatePool(ctx, block, eventData.poolId.toString())

    const bonus = await getBonusInfo(block, eventData.poolId)
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

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                pool: eventData.poolId.toString(),
                paymentId: eventData.paymentId,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
