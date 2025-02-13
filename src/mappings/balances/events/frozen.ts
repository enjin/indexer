import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Frozen } from './types'

export function frozen(event: EventItem): Frozen {
    return match(event)
        .returnType<Frozen>()
        .when(
            () => balances.frozen.matrixEnjinV603.is(event),
            () => balances.frozen.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
