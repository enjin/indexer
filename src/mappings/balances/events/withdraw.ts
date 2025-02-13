import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Withdraw } from './types'

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
