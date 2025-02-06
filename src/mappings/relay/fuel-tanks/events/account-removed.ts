import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTankUserAccounts, FuelTank } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (fuelTanks.accountRemoved.enjinV100.is(event)) {
        return fuelTanks.accountRemoved.enjinV100.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.accountRemoved.name)
}

export async function accountRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item)

    if (!eventData) return undefined

    const tankAccountId = `${eventData.tankId}-${eventData.userId}`

    await ctx.store.remove(FuelTankUserAccounts, tankAccountId)

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: eventData.tankId })
    tank.accountCount -= 1
    await ctx.store.save(tank)

    return undefined
}
