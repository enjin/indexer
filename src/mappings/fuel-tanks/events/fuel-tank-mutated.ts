import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FuelTankMutatedEvent = {
    tankId: string
    mutation: any
}

export function fuelTankMutated(event: EventItem): FuelTankMutatedEvent {
    return match(event)
        .returnType<FuelTankMutatedEvent>()
        .when(fuelTanks.fuelTankMutated.matrixEnjinV1012.is, () => fuelTanks.fuelTankMutated.matrixEnjinV1012.decode(event))
        .when(fuelTanks.fuelTankMutated.matrixEnjinV603.is, () => fuelTanks.fuelTankMutated.matrixEnjinV603.decode(event))
        .when(fuelTanks.fuelTankMutated.matrixV1010.is, () => fuelTanks.fuelTankMutated.matrixV1010.decode(event))
        .when(fuelTanks.fuelTankMutated.matrixV500.is, () => fuelTanks.fuelTankMutated.matrixV500.decode(event))
        .when(fuelTanks.fuelTankMutated.enjinV1032.is, () => fuelTanks.fuelTankMutated.enjinV1032.decode(event))
        .when(fuelTanks.fuelTankMutated.enjinV100.is, () => fuelTanks.fuelTankMutated.enjinV100.decode(event))
        .when(fuelTanks.fuelTankMutated.v1030.is, () => fuelTanks.fuelTankMutated.v1030.decode(event))
        .when(fuelTanks.fuelTankMutated.v102.is, () => fuelTanks.fuelTankMutated.v102.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
