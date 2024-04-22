import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (fuelTanks.accountAdded.matrixEnjinV1000.is(event)) {
        return fuelTanks.accountAdded.matrixEnjinV1000.decode(event)
    }

    if (fuelTanks.accountAdded.matrixEnjinV603.is(event)) {
        return fuelTanks.accountAdded.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.accountAdded.v1000.is(event)) {
        return fuelTanks.accountAdded.v1000.decode(event)
    }

    if (fuelTanks.accountAdded.v500.is(event)) {
        return fuelTanks.accountAdded.v500.decode(event)
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
