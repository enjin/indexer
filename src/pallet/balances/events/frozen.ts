import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Frozen } from '~/pallet/balances/events/types'

export function frozen(event: EventItem): Frozen {
    return match(event)
        .returnType<Frozen>()
        .when(
            () => balances.frozen.matrixEnjinV603.is(event),
            () => balances.frozen.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
