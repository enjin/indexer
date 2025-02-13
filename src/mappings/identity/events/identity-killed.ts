import { identity } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { IdentityKilled } from './types'

export function identityKilled(event: EventItem): IdentityKilled {
    return match(event)
        .returnType<IdentityKilled>()
        .when(
            () => identity.identityKilled.matrixEnjinV1000.is(event),
            () => identity.identityKilled.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
