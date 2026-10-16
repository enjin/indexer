import { claims } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ClaimMoved } from '~/pallet/claims/events/types'

export function claimMoved(event: EventItem): ClaimMoved {
    return match(event)
        .returnType<ClaimMoved>()
        .when(
            () => claims.claimMoved.matrixEnjinV603.is(event),
            () => claims.claimMoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
