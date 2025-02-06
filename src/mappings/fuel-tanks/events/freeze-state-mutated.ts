import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (fuelTanks.freezeStateMutated.matrixEnjinV603.is(event)) {
        return fuelTanks.freezeStateMutated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.freezeStateMutated)
}
