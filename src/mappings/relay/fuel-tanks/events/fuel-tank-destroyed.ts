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
    if (fuelTanks.fuelTankDestroyed.enjinV100.is(event)) {
        return fuelTanks.fuelTankDestroyed.enjinV100.decode(event)
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

    const [permittedExtrinsics, ruleSet, accountRuleSet, tank] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, {
            relations: { ruleSet: true },
            where: { ruleSet: { tank: { id: tankId } } },
        }),
        ctx.store.find(FuelTankRuleSet, { where: { tank: { id: tankId } } }),
        ctx.store.find(FuelTankAccountRules, { where: { tank: { id: tankId } } }),
        ctx.store.findOneByOrFail(FuelTank, { id: tankId }),
    ])

    await Promise.all([ctx.store.remove(permittedExtrinsics), ctx.store.remove(ruleSet), ctx.store.remove(accountRuleSet)])

    await ctx.store.remove(tank)

    return new EventModel({
        id: item.id,
        name: FuelTankDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankDestroyed({
            tank: tankId,
        }),
    })
}
