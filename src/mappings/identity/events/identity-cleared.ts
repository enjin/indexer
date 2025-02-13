import { identity } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { IdentityCleared } from './types'

export function identityCleared(event: EventItem): IdentityCleared {
    return match(event)
        .returnType<IdentityCleared>()
        .when(
            () => identity.identityCleared.matrixEnjinV1000.is(event),
            () => identity.identityCleared.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
