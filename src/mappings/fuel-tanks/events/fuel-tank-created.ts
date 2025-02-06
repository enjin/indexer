import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function fuelTankCreated(event: EventItem) {
    if (fuelTanks.fuelTankCreated.matrixEnjinV603.is(event)) {
        return fuelTanks.fuelTankCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.fuelTankCreated)
}
