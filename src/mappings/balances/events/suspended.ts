import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SuspendedEvent = {
    who: string
    amount: bigint
}

export function suspended(event: EventItem): SuspendedEvent {
    return match(event)
        .returnType<SuspendedEvent>()
        .when(balances.suspended.matrixEnjinV603.is, () => balances.suspended.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
