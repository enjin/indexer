import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
