import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTankUserAccounts, FuelTank } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import * as mappings from './../../mappings'
export async function accountRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountRemoved(item)

    if (!eventData) return undefined

    const tankAccountId = `${eventData.tankId}-${eventData.userId}`

    await ctx.store.remove(FuelTankUserAccounts, tankAccountId)

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: eventData.tankId })
    tank.accountCount -= 1
    await ctx.store.save(tank)

    return undefined
}
