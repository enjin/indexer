import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { SubIdentityRenamed } from '~/pallet/identity/events/types'

export function subIdentityRenamed(event: EventItem): SubIdentityRenamed {
    return match(event)
        .returnType<SubIdentityRenamed>()
        .when(
            () => identity.subIdentityRenamed.matrixEnjinV1031.is(event),
            () => identity.subIdentityRenamed.matrixEnjinV1031.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
