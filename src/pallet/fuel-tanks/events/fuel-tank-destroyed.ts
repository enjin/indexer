import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { FuelTankDestroyed } from '~/pallet/fuel-tanks/events/types'

export function fuelTankDestroyed(event: EventItem): FuelTankDestroyed {
    return match(event)
        .returnType<FuelTankDestroyed>()
        .when(
            () => fuelTanks.fuelTankDestroyed.matrixEnjinV603.is(event),
            () => fuelTanks.fuelTankDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
