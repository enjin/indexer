import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (fuelTanks.accountAdded.matrixEnjinV1000.is(event)) {
        return fuelTanks.accountAdded.matrixEnjinV1000.decode(event)
    }

    if (fuelTanks.accountAdded.matrixEnjinV603.is(event)) {
        return fuelTanks.accountAdded.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.accountAdded.matrixV1000.is(event)) {
        return fuelTanks.accountAdded.matrixV1000.decode(event)
    }

    if (fuelTanks.accountAdded.matrixV500.is(event)) {
        return fuelTanks.accountAdded.matrixV500.decode(event)
    }

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

    throw new UnsupportedEventError(fuelTanks.accountAdded)
}
