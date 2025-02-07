import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnlockedEvent = {
    who: string
    amount: bigint
}

export function unlocked(event: EventItem): UnlockedEvent {
    return match(event)
        .returnType<UnlockedEvent>()
        .when(balances.unlocked.matrixEnjinV603.is, balances.unlocked.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
