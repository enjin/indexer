import { BlockHeader, Event as EventItem } from '@subsquid/substrate-processor'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { BalancesTransferEvent } from '../../../types/generated/events'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { Sns } from '../../../common/sns'

interface EventData {
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { from, to, amount } = data.asMatrixEnjinV603
        return { from, to, amount }
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function transfer(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem<{ event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item)
    if (!eventData) return undefined

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                from: u8aToHex(eventData.from),
                to: u8aToHex(eventData.to),
                amount: eventData.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: u8aToHex(eventData.from),
            to: u8aToHex(eventData.to),
            amount: eventData.amount,
        }),
    })
}
