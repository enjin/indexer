import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Locked } from './types'

export function locked(event: EventItem): Locked {
    return match(event)
        .returnType<Locked>()
        .when(
            () => balances.locked.matrixEnjinV603.is(event),
            () => balances.locked.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
