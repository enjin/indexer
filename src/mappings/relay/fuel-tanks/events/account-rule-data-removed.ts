import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.accountRuleDataRemoved.enjinV1032.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV1032.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.enjinV1021.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV1021.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.enjinV100.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV100.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1032.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1032.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1030.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1030.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1021.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1021.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v102.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v102.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.accountRuleDataRemoved.name)
}

const uc = <T extends string>(x: T) => (x.charAt(0).toLowerCase() + x.slice(1)) as Uncapitalize<T>

export async function accountRuleDataRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

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
