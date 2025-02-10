import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { FuelTankCreated } from './types'

export function fuelTankCreated(event: EventItem): FuelTankCreated {
    return match(event)
        .returnType<FuelTankCreated>()
        .when(fuelTanks.fuelTankCreated.matrixEnjinV603.is, fuelTanks.fuelTankCreated.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
