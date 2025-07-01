import { Event as EventModel, FuelTank, FuelTankRuleSet } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

export async function freezeStateMutated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.freezeStateMutated(item)

    if (eventData.ruleSetId !== undefined) {
        const fuelTankRuleSet = await ctx.store.findOneByOrFail<FuelTankRuleSet>(FuelTankRuleSet, {
            id: `${eventData.tankId}-${eventData.ruleSetId}`,
        })
        fuelTankRuleSet.isFrozen = eventData.isFrozen

        await ctx.store.save(fuelTankRuleSet)
    } else {
        const tank = await ctx.store.findOneByOrFail<FuelTank>(FuelTank, { id: eventData.tankId })

        tank.isFrozen = eventData.isFrozen

        await ctx.store.save(tank)
    }

    return undefined
}
