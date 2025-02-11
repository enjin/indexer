import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
