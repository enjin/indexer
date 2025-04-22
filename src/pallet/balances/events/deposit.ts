import { balances } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Deposit } from './types'

export function deposit(event: EventItem): Deposit {
    return match(event)
        .returnType<Deposit>()
        .when(
            () => balances.deposit.matrixEnjinV603.is(event),
            () => balances.deposit.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
