import { Event as EventModel, FuelTank, FuelTankRuleSet } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'

export async function freezeStateMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.freezeStateMutated(item)

    if (eventData.ruleSetId !== undefined) {
        const fuelTankRuleSet = await ctx.store.findOneByOrFail(FuelTankRuleSet, {
            id: `${eventData.tankId}-${eventData.ruleSetId}`,
        })
        fuelTankRuleSet.isFrozen = eventData.isFrozen

        await ctx.store.save(fuelTankRuleSet)
    } else {
        const tank = await ctx.store.findOneByOrFail(FuelTank, { id: eventData.tankId })

        tank.isFrozen = eventData.isFrozen

        await ctx.store.save(tank)
    }

    return undefined
}
