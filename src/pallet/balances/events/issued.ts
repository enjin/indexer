import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Issued } from '~/pallet/balances/events/types'

export function issued(event: EventItem): Issued {
    return match(event)
        .returnType<Issued>()
        .when(
            () => balances.issued.matrixEnjinV603.is(event),
            () => balances.issued.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
