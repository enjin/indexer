import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.ruleSetRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.ruleSetRemoved.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.ruleSetRemoved.name)
}

export async function ruleSetRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

    const ruleId = `${eventData.tankId}-${eventData.ruleSetId}`

    const [permittedExtrinsics, ruleSet] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleId } }),
    ])

    await Promise.all([ctx.store.remove(permittedExtrinsics), ctx.store.remove(ruleSet)])

    return undefined
}
