import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ThawedEvent = {
    who: string
    amount: bigint
}

export function thawed(event: EventItem): ThawedEvent {
    return match(event)
        .returnType<ThawedEvent>()
        .when(balances.thawed.matrixEnjinV603.is, () => balances.thawed.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
