import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
