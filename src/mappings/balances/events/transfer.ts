import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
