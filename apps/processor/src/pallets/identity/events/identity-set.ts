import { identity } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { IdentitySet } from './types'

export function identitySet(event: EventItem): IdentitySet {
    return match(event)
        .returnType<IdentitySet>()
        .when(
            () => identity.identitySet.matrixEnjinV1000.is(event),
            () => identity.identitySet.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
