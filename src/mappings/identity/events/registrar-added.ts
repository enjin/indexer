import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type RegistrarAddedEvent = {
    registrarIndex: number
}

export function registrarAdded(event: EventItem): RegistrarAddedEvent {
    return match(event)
        .returnType<RegistrarAddedEvent>()
        .when(identity.registrarAdded.matrixEnjinV1000.is, identity.registrarAdded.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
