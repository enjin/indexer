import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../model'
import { CommonContext, EventItem, BlockHeader } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'
export async function accountAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.accountAdded(item)

    if (!eventData) return undefined

    const { tankId } = eventData
    const [tank, account] = await Promise.all([
        ctx.store.findOneByOrFail(FuelTank, { id: tankId }),
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
