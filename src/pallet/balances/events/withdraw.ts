import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Withdraw } from '~/pallet/balances/events/types'

export function withdraw(event: EventItem): Withdraw {
    return match(event)
        .returnType<Withdraw>()
        .when(
            () => balances.withdraw.matrixEnjinV603.is(event),
            () => balances.withdraw.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
