import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
