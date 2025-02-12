import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function accountRuleDataRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountRuleDataRemoved(item)
    const ruleId = `${eventData.tankId}-${eventData.ruleSetId}`
    const ruleSet = await ctx.store.findOneByOrFail<FuelTankRuleSet>(FuelTankRuleSet, { id: ruleId })

    const kind = eventData.ruleKind.__kind
    if (kind === 'PermittedExtrinsics') {
        const permittedExtrinsics = await ctx.store.findBy<PermittedExtrinsics>(PermittedExtrinsics, {
            ruleSet: { id: ruleId },
        })

        await ctx.store.remove(
            PermittedExtrinsics,
            permittedExtrinsics.map((x) => x.id)
        )
    } else {
        // TODO: Fix this
        // ruleSet[uc(kind)] = undefined
    }

    await ctx.store.save(ruleSet)

    return undefined
}
