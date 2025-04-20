import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Restored } from './types'

export function restored(event: EventItem): Restored {
    return match(event)
        .returnType<Restored>()
        .when(
            () => balances.restored.matrixEnjinV603.is(event),
            () => balances.restored.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
