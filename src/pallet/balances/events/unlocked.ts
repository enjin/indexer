import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Unlocked } from '~/pallet/balances/events/types'

export function unlocked(event: EventItem): Unlocked {
    return match(event)
        .returnType<Unlocked>()
        .when(
            () => balances.unlocked.matrixEnjinV603.is(event),
            () => balances.unlocked.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
