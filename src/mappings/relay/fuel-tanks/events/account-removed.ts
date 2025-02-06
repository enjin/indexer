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
