import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Unlocked } from './types'

export function unlocked(event: EventItem): Unlocked {
    return match(event)
        .returnType<Unlocked>()
        .when(
            () => balances.unlocked.matrixEnjinV603.is(event),
            () => balances.unlocked.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
