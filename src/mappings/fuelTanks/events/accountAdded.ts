import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksAccountAddedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankAccountRules} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksAccountAddedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankDestroyed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const tankId = u8aToHex(eventData.tankId)
    ctx.store.delete(FuelTank, { tank: { id: tankId } })

    return undefined
}
