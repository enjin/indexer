import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
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
