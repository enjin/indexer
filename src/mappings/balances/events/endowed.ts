import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Endowed } from './types'

export function endowed(event: EventItem): Endowed {
    return match(event)
        .returnType<Endowed>()
        .when(
            () => balances.endowed.matrixEnjinV603.is(event),
            () => balances.endowed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
