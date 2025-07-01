import { claims } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Claimed } from '~/pallet/claims/events/types'

export function claimed(event: EventItem): Claimed {
    return match(event)
        .returnType<Claimed>()
        .when(
            () => claims.claimed.matrixEnjinV603.is(event),
            () => claims.claimed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
