import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Reserved } from './types'

export function reserved(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(
            () => balances.reserved.matrixEnjinV603.is(event),
            () => balances.reserved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
