import { claims } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ClaimMinted } from '~/pallet/claims/events/types'

export function claimMinted(event: EventItem): ClaimMinted {
    return match(event)
        .returnType<ClaimMinted>()
        .when(
            () => claims.claimMinted.matrixEnjinV603.is(event),
            () => claims.claimMinted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
