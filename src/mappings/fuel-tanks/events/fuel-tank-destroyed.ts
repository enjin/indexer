import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FuelTankDestroyedEvent = {
    tankId: string
}

export function fuelTankDestroyed(event: EventItem): FuelTankDestroyedEvent {
    return match(event)
        .returnType<FuelTankDestroyedEvent>()
        .when(fuelTanks.fuelTankDestroyed.matrixEnjinV603.is, () => fuelTanks.fuelTankDestroyed.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
