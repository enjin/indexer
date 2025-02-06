import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type RestoredEvent = {
    who: string
    amount: bigint
}

export function restored(event: EventItem): RestoredEvent {
    return match(event)
        .returnType<RestoredEvent>()
        .when(balances.restored.matrixEnjinV603.is, () => balances.restored.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
