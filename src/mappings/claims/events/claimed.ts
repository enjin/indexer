import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimedEvent = {
    who: string
    ethereumAddress?: string
    amount: bigint
}

export function claimed(event: EventItem): ClaimedEvent {
    return match(event)
        .returnType<ClaimedEvent>()
        .when(claims.claimed.matrixEnjinV603.is, claims.claimed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
