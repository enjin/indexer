import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { IdentitySet } from '~/pallet/identity/events/types'

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
