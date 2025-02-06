import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankRuleSet } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

export async function freezeStateMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

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
