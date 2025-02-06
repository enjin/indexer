import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function fuelTankDestroyed(event: EventItem) {
    return match(event)
        .when(fuelTanks.fuelTankDestroyed.matrixEnjinV603.is, () => fuelTanks.fuelTankDestroyed.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(fuelTanks.fuelTankDestroyed)
        })
}
