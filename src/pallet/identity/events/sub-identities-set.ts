import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { SubIdentitiesSet } from '~/pallet/identity/events/types'

export function subIdentitiesSet(event: EventItem): SubIdentitiesSet {
    return match(event)
        .returnType<SubIdentitiesSet>()
        .when(
            () => identity.subIdentitiesSet.matrixEnjinV1031.is(event),
            () => identity.subIdentitiesSet.matrixEnjinV1031.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
