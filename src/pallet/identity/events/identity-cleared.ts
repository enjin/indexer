import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { IdentityCleared } from '~/pallet/identity/events/types'

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
