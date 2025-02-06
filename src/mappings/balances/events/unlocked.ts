import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnlockedEvent = {
    who: string
    amount: bigint
}

export function getUnlocked(event: EventItem) {
    return match(event)
        .returnType<UnlockedEvent>()
        .when(balances.unlocked.matrixEnjinV603.is, () => balances.unlocked.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.unlocked)
        })
}
