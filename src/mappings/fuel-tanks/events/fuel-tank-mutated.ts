import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { FuelTankMutated } from './types'

export function fuelTankMutated(event: EventItem): FuelTankMutated {
    return match(event)
        .returnType<FuelTankMutated>()
        .when(fuelTanks.fuelTankMutated.matrixEnjinV1012.is, fuelTanks.fuelTankMutated.matrixEnjinV1012.decode)
        .when(fuelTanks.fuelTankMutated.matrixEnjinV603.is, fuelTanks.fuelTankMutated.matrixEnjinV603.decode)
        .when(fuelTanks.fuelTankMutated.matrixV1010.is, fuelTanks.fuelTankMutated.matrixV1010.decode)
        .when(fuelTanks.fuelTankMutated.matrixV500.is, fuelTanks.fuelTankMutated.matrixV500.decode)
        .when(fuelTanks.fuelTankMutated.enjinV1032.is, fuelTanks.fuelTankMutated.enjinV1032.decode)
        .when(fuelTanks.fuelTankMutated.enjinV100.is, fuelTanks.fuelTankMutated.enjinV100.decode)
        .when(fuelTanks.fuelTankMutated.v1030.is, fuelTanks.fuelTankMutated.v1030.decode)
        .when(fuelTanks.fuelTankMutated.v102.is, fuelTanks.fuelTankMutated.v102.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
