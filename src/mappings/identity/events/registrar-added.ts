import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
