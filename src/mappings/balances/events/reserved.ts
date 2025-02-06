import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ReservedEvent = {
    who: string
    amount: bigint
}

export function reserved(event: EventItem): ReservedEvent {
    return match(event)
        .returnType<ReservedEvent>()
        .when(balances.reserved.matrixEnjinV603.is, () => balances.reserved.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
