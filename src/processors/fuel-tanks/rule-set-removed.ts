import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function ruleSetRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.ruleSetRemoved(item)

    if (!eventData) return undefined

    const ruleId = `${eventData.tankId}-${eventData.ruleSetId}`

    const [permittedExtrinsics, ruleSet] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleId } }),
    ])

    await Promise.all([ctx.store.remove(permittedExtrinsics), ctx.store.remove(ruleSet)])

    return undefined
}
