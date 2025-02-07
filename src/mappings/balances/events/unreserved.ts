import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnreservedEvent = {
    who: string
    amount: bigint
}

export function unreserved(event: EventItem): UnreservedEvent {
    return match(event)
        .returnType<UnreservedEvent>()
        .when(balances.unreserved.matrixEnjinV603.is, balances.unreserved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
