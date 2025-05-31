import { fuelTanks } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { FreezeStateMutated } from './types'

export function freezeStateMutated(event: EventItem): FreezeStateMutated {
    return match(event)
        .returnType<FreezeStateMutated>()
        .when(
            () => fuelTanks.freezeStateMutated.matrixEnjinV603.is(event),
            () => fuelTanks.freezeStateMutated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
