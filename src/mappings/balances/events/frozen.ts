import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
