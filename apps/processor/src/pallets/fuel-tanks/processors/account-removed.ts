import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'

export async function accountRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountRemoved(item)

    const tankAccountId = `${eventData.tankId}-${eventData.userId}`

    await ctx.store.remove(FuelTankUserAccounts, tankAccountId)

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: eventData.tankId })
    tank.accountCount -= 1
    await ctx.store.save(tank)

    return undefined
}
