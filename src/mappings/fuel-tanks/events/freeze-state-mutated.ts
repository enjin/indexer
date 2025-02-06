import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function freezeStateMutated(event: EventItem) {
    return match(event)
        .when(fuelTanks.freezeStateMutated.matrixEnjinV603.is, () => fuelTanks.freezeStateMutated.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(fuelTanks.freezeStateMutated)
        })
}
