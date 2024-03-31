import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankDestroyed,
    FuelTankAccountRules,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.fuelTankDestroyed.matrixEnjinV603.is(event)) {
        return fuelTanks.fuelTankDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.fuelTankDestroyed.name)
}

export async function fuelTankDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

    const { tankId } = eventData

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
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankDestroyed({
            tank: tankId,
        }),
    })
}
