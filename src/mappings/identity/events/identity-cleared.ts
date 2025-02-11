import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { IdentityCleared } from './types'

export function identityCleared(event: EventItem): IdentityCleared {
    return match(event)
        .returnType<IdentityCleared>()
        .when(identity.identityCleared.matrixEnjinV1000.is, identity.identityCleared.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
