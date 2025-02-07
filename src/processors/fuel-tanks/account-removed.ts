import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function accountRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountRemoved(item)

    const tankAccountId = `${eventData.tankId}-${eventData.userId}`

    await ctx.store.remove(FuelTankUserAccounts, tankAccountId)

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: eventData.tankId })
    tank.accountCount -= 1
    await ctx.store.save(tank)

    return undefined
}
