import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function fuelTankMutated(event: EventItem) {
    if (fuelTanks.fuelTankMutated.matrixEnjinV1012.is(event)) {
        return fuelTanks.fuelTankMutated.matrixEnjinV1012.decode(event)
    }
    if (fuelTanks.fuelTankMutated.matrixEnjinV603.is(event)) {
        return fuelTanks.fuelTankMutated.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.fuelTankMutated.matrixV1010.is(event)) {
        return fuelTanks.fuelTankMutated.matrixV1010.decode(event)
    }
    if (fuelTanks.fuelTankMutated.matrixV500.is(event)) {
        return fuelTanks.fuelTankMutated.matrixV500.decode(event)
    }

    if (fuelTanks.fuelTankMutated.enjinV1032.is(event)) {
        return fuelTanks.fuelTankMutated.enjinV1032.decode(event)
    }

    if (fuelTanks.fuelTankMutated.enjinV100.is(event)) {
        return fuelTanks.fuelTankMutated.enjinV100.decode(event)
    }

    if (fuelTanks.fuelTankMutated.v1030.is(event)) {
        return fuelTanks.fuelTankMutated.v1030.decode(event)
    }

    if (fuelTanks.fuelTankMutated.v102.is(event)) {
        return fuelTanks.fuelTankMutated.v102.decode(event)
    }

    throw new UnsupportedEventError(event)
}
