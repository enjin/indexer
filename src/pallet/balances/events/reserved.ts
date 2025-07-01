import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Reserved } from '~/pallet/balances/events/types'

export function reserved(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(
            () => balances.reserved.matrixEnjinV603.is(event),
            () => balances.reserved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
