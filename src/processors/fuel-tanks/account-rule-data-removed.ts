import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import * as mappings from './../../mappings'
const uc = <T extends string>(x: T) => (x.charAt(0).toLowerCase() + x.slice(1)) as Uncapitalize<T>

export async function accountRuleDataRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountRuleDataRemoved(item)

    if (!eventData) return undefined

    const ruleId = `${eventData.tankId}-${eventData.ruleSetId}`

    const ruleSet = await ctx.store.findOneByOrFail(FuelTankRuleSet, { id: ruleId })

    if (eventData.ruleKind) {
        const kind = eventData.ruleKind.__kind
        if (kind === 'PermittedExtrinsics') {
            const permittedExtrinsics = await ctx.store.findBy(PermittedExtrinsics, {
                ruleSet: { id: ruleId },
            })

            await ctx.store.remove(
                PermittedExtrinsics,
                permittedExtrinsics.map((x) => x.id)
            )
        } else {
            ruleSet[uc(kind)] = undefined
        }
    }

    await ctx.store.save(ruleSet)

    return undefined
}
