import { balances } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Transfer } from './types'

export function transfer(event: EventItem): Transfer {
    return match(event)
        .returnType<Transfer>()
        .when(
            () => balances.transfer.matrixEnjinV603.is(event),
            () => balances.transfer.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
