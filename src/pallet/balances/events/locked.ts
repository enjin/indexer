import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Locked } from '~/pallet/balances/events/types'

export function locked(event: EventItem): Locked {
    return match(event)
        .returnType<Locked>()
        .when(
            () => balances.locked.matrixEnjinV603.is(event),
            () => balances.locked.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
