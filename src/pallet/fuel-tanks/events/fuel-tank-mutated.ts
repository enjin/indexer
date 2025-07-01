import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { FuelTankMutated } from '~/pallet/fuel-tanks/events/types'

export function fuelTankMutated(event: EventItem): FuelTankMutated {
    return match(event)
        .returnType<FuelTankMutated>()
        .when(
            () => fuelTanks.fuelTankMutated.matrixEnjinV1012.is(event),
            () => fuelTanks.fuelTankMutated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.matrixEnjinV603.is(event),
            () => fuelTanks.fuelTankMutated.matrixEnjinV603.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.matrixV1010.is(event),
            () => fuelTanks.fuelTankMutated.matrixV1010.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.matrixV500.is(event),
            () => fuelTanks.fuelTankMutated.matrixV500.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.enjinV1032.is(event),
            () => fuelTanks.fuelTankMutated.enjinV1032.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.enjinV100.is(event),
            () => fuelTanks.fuelTankMutated.enjinV100.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.v1030.is(event),
            () => fuelTanks.fuelTankMutated.v1030.decode(event)
        )
        .when(
            () => fuelTanks.fuelTankMutated.v102.is(event),
            () => fuelTanks.fuelTankMutated.v102.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
