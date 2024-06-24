import { BlockHeader } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { balances } from '../../../types/generated/events'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { CommonContext, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (balances.transfer.matrixEnjinV603.is(event)) {
        return balances.transfer.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(balances.transfer.name)
}

export async function transfer(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)
    if (!eventData) return undefined

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                from: eventData.from,
                to: eventData.to,
                amount: eventData.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        name: BalancesTransfer.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: eventData.from,
            to: eventData.to,
            amount: eventData.amount,
        }),
    })
}
