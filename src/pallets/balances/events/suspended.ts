import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Suspended } from './types'

export function suspended(event: EventItem): Suspended {
    return match(event)
        .returnType<Suspended>()
        .when(
            () => balances.suspended.matrixEnjinV603.is(event),
            () => balances.suspended.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
