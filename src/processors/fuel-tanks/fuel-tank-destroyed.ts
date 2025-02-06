import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankDestroyed,
    FuelTankAccountRules,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../model'
import { CommonContext, EventItem, BlockHeader } from '../../common/types/contexts'
import * as mappings from './../../mappings'
export async function fuelTankDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.fuelTankDestroyed(item)

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
