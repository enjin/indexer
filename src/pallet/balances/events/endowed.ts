import { balances } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
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
