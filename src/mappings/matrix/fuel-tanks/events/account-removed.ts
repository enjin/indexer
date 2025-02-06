import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTankUserAccounts, FuelTank } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (fuelTanks.accountRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.accountRemoved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.accountRemoved.name)
}
