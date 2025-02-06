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
