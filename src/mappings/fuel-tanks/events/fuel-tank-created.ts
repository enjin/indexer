import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FuelTankCreatedEvent = {
    tankId: string
    owner: string
    name: string
}

export function fuelTankCreated(event: EventItem): FuelTankCreatedEvent {
    return match(event)
        .returnType<FuelTankCreatedEvent>()
        .when(fuelTanks.fuelTankCreated.matrixEnjinV603.is, () => fuelTanks.fuelTankCreated.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
