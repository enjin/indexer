import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksFreezeStateMutatedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankRuleSet } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFreezeStateMutatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function freezeStateMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FreezeStateMutated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    if (eventData.ruleSetId !== undefined) {
        const id = `${u8aToHex(eventData.tankId)}-${eventData.ruleSetId}`
        ctx.store.update(FuelTankRuleSet, { id }, { isFrozen: eventData.isFrozen })
    } else {
        const id = u8aToHex(eventData.tankId)
        ctx.store.update(FuelTank, { id }, { isFrozen: eventData.isFrozen })
    }

    return undefined
}
