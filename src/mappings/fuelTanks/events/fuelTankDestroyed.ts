import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankDestroyedEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankDestroyed,
    FuelTankAccountRules,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankDestroyedEvent(ctx, event)

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

    const pE = await ctx.store.find(PermittedExtrinsics, {
        relations: { ruleSet: true },
        where: { ruleSet: { tank: { id: tankId } } },
    })

    await ctx.store.remove(pE)
    await Promise.all([
        ctx.store.delete(FuelTankRuleSet, { tank: { id: tankId } }),
        ctx.store.delete(FuelTankAccountRules, { tank: { id: tankId } }),
    ])

    await ctx.store.delete(FuelTank, { id: tankId })

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new FuelTankDestroyed({
            tank: tankId,
        }),
    })
}
