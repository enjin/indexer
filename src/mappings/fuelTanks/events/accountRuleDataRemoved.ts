import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.accountRuleDataRemoved.v1010.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1010.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v500.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v500.decode(event)
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
