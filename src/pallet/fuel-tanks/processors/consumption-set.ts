import { Event as EventModel, Extrinsic, FuelTankConsumptionSet } from '~/model'
import { Block, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

/**
 * force_set_consumption overwrites a TankFuelBudget rule's consumption (no user) or one account's UserFuelBudget
 * rule data. Neither consumption is modelled on FuelTankRuleSet, so the event is only recorded.
 */
export function consumptionSet(block: Block, item: EventItem): EventModel {
    const eventData = mappings.fuelTanks.events.consumptionSet(item)

    return new EventModel({
        id: item.id,
        name: FuelTankConsumptionSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankConsumptionSet({
            tank: eventData.tankId,
            user: eventData.userId ?? null,
            ruleSetId: eventData.ruleSetId,
            totalConsumed: eventData.consumption.totalConsumed,
            lastResetBlock: eventData.consumption.lastResetBlock ?? null,
        }),
    })
}
