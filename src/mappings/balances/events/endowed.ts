import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type EndowedEvent = {
    account: string
    freeBalance: bigint
}

export function endowed(event: EventItem): EndowedEvent {
    return match(event)
        .returnType<EndowedEvent>()
        .when(balances.endowed.matrixEnjinV603.is, balances.endowed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
