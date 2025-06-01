import { identity } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { RegistrarAdded } from './types'

export function registrarAdded(event: EventItem): RegistrarAdded {
    return match(event)
        .returnType<RegistrarAdded>()
        .when(
            () => identity.registrarAdded.matrixEnjinV1000.is(event),
            () => identity.registrarAdded.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
