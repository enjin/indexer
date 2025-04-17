import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankAccountRules,
    FuelTankDestroyed,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../model'
import { Block, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'

export async function fuelTankDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.fuelTankDestroyed(item)

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

    await Promise.all([
        ctx.store.remove(permittedExtrinsics),
        ctx.store.remove(ruleSet),
        ctx.store.remove(accountRuleSet),
    ])

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
