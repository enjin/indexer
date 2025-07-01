import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Suspended } from '~/pallet/balances/events/types'

export function suspended(event: EventItem): Suspended {
    return match(event)
        .returnType<Suspended>()
        .when(
            () => balances.suspended.matrixEnjinV603.is(event),
            () => balances.suspended.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
