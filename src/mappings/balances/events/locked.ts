import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type LockedEvent = {
    who: string
    amount: bigint
}

export function locked(event: EventItem): LockedEvent {
    return match(event)
        .returnType<LockedEvent>()
        .when(balances.locked.matrixEnjinV603.is, balances.locked.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
