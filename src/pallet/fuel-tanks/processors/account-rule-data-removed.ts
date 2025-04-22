import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'

export async function accountRuleDataRemoved(
    ctx: CommonContext,
    block: Block,
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
        const ruleKind = kind.charAt(0).toLowerCase() + kind.slice(1)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ruleSet[ruleKind] = undefined
    }

    await ctx.store.save(ruleSet)

    return undefined
}
