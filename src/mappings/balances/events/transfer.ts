import { UnknownVersionError } from '../../../common/errors'
import { BalancesTransferEvent } from '../../../types/generated/events'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { Context } from '../../../processor'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/generated/support'
import { u8aToHex } from '@polkadot/util'

interface EventData {
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isEfinityV2) {
        const { from, to, amount } = data.asEfinityV2
        return { from, to, amount }
    }
    if (data.isEfinityV1) {
        const [from, to, amount] = data.asEfinityV1
        return { from, to, amount }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function transfer(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Balances.Transfer', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: u8aToHex(eventData.from),
            to: u8aToHex(eventData.to),
            amount: eventData.amount,
        }),
    })

    // const call = ctx.event.extrinsic?.call
    // if (!call || call.name !== 'Balances.transfer_all') return
    //
    // await saveTransfer(ctx, {
    //     id: call.id,
    //     timestamp: new Date(ctx.block.timestamp),
    //     blockNumber: ctx.block.height,
    //     extrinsicHash: ctx.event.extrinsic?.hash,
    //     fromId: encodeId(eventData.from),
    //     toId: encodeId(eventData.to),
    //     amount: eventData.amount,
    //     tip: ctx.event.extrinsic?.tip,
    //     error: ctx.event.extrinsic?.error,
    //     success: call.success,
    //     type: TransferType.Native,
    // })
}
