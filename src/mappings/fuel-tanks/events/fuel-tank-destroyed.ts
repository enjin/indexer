import { fuelTanks } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { FuelTankDestroyed } from './types'

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
