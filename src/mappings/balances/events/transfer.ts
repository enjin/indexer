import { UnknownVersionError } from '../../../common/errors'
import { BalancesTransferEvent } from '../../../types/generated/events'
import { EventHandlerContext } from '../../types/contexts'
import { TransferType } from '../../../model'
import { saveTransfer } from '../../util/entities'
import { encodeId } from '../../../common/tools'

interface EventData {
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new BalancesTransferEvent(ctx)
    console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}`)

    if (event.isEfinityV2) {
        const { from, to, amount } = event.asEfinityV2
        return { from, to, amount }
    } else if (event.isEfinityV1) {
        const [ from, to, amount ] = event.asEfinityV1
        return { from, to, amount }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTransfer(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx as EventHandlerContext)
    if (!eventData) return

    const call = ctx.event.extrinsic?.call
    if (!call || call.name !== 'Balances.transfer_all') return

    await saveTransfer(ctx, {
        id: call.id,
        timestamp: new Date(ctx.block.timestamp),
        blockNumber: ctx.block.height,
        extrinsicHash: ctx.event.extrinsic?.hash,
        fromId: encodeId(eventData.from),
        toId: encodeId(eventData.to),
        amount: eventData.amount,
        tip: ctx.event.extrinsic?.tip,
        error: ctx.event.extrinsic?.error,
        success: call.success,
        type: TransferType.Native,
    })
}
