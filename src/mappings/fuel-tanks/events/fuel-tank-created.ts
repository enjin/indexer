import { fuelTanks } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { FuelTankCreated } from './types'

export function fuelTankCreated(event: EventItem): FuelTankCreated {
    return match(event)
        .returnType<FuelTankCreated>()
        .when(
            () => fuelTanks.fuelTankCreated.matrixEnjinV603.is(event),
            () => fuelTanks.fuelTankCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
