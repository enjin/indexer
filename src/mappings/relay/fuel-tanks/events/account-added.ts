import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (fuelTanks.accountAdded.enjinV1021.is(event)) {
        return fuelTanks.accountAdded.enjinV1021.decode(event)
    }

    if (fuelTanks.accountAdded.enjinV100.is(event)) {
        return fuelTanks.accountAdded.enjinV100.decode(event)
    }

    if (fuelTanks.accountAdded.v1021.is(event)) {
        return fuelTanks.accountAdded.v1021.decode(event)
    }

    if (fuelTanks.accountAdded.v102.is(event)) {
        return fuelTanks.accountAdded.v102.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.accountAdded.name)
}

export async function accountAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

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
