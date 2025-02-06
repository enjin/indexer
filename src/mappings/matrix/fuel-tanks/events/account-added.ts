import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../model'
import { CommonContext, EventItem, BlockHeader } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

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

    throw new UnsupportedEventError(fuelTanks.accountAdded.name)
}
