import { Event as EventModel, Extrinsic, FuelTankAccountRuleDataRemoved } from '~/model'
import { Block, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

/**
 * remove_account_rule_data clears one account's stored data for one rule (e.g. its UserFuelBudget consumption) and
 * decrements the rule's account-data counter. The rule set's rules are untouched, and per-account rule data is not
 * modelled, so the event is only recorded.
 */
export function accountRuleDataRemoved(block: Block, item: EventItem): EventModel {
    const eventData = mappings.fuelTanks.events.accountRuleDataRemoved(item)

    return new EventModel({
        id: item.id,
        name: FuelTankAccountRuleDataRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankAccountRuleDataRemoved({
            tank: eventData.tankId,
            user: eventData.userId,
            ruleSetId: eventData.ruleSetId,
            ruleKind: eventData.ruleKind.__kind,
        }),
    })
}
