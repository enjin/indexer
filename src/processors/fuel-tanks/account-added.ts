import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../model'
import { Block, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount } from '../../utils/entities'
import * as mappings from './../../mappings'

export async function accountAdded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountAdded(item)

    const { tankId } = eventData
    const [tank, account] = await Promise.all([
        ctx.store.findOneByOrFail<FuelTank>(FuelTank, { id: tankId }),
        getOrCreateAccount(ctx, eventData.userId),
    ])

    const fuelAccount = new FuelTankUserAccounts({
        id: `${tankId}-${account.id}`,
        tank,
        account,
        tankDeposit: eventData.tankDeposit,
        userDeposit: eventData.userDeposit,
    })
    tank.accountCount += 1

    await Promise.all([ctx.store.save(fuelAccount), ctx.store.save(tank)])

    return undefined
}
