import { claims } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ClaimRejected } from '~/pallet/claims/events/types'

export function claimRejected(event: EventItem): ClaimRejected {
    return match(event)
        .returnType<ClaimRejected>()
        .when(
            () => claims.claimRejected.matrixEnjinV603.is(event),
            () => claims.claimRejected.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
