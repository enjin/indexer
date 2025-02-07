import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FreezeStateMutatedEvent = {
    tankId: string
    isFrozen: boolean
    ruleSetId?: number
}

export function freezeStateMutated(event: EventItem): FreezeStateMutatedEvent {
    return match(event)
        .returnType<FreezeStateMutatedEvent>()
        .when(fuelTanks.freezeStateMutated.matrixEnjinV603.is, fuelTanks.freezeStateMutated.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
