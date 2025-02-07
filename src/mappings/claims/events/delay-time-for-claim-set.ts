import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type DelayTimeForClaimSetEvent = {
    delayTime: number
}

export function delayTimeForClaimSet(event: EventItem): DelayTimeForClaimSetEvent {
    return match(event)
        .returnType<DelayTimeForClaimSetEvent>()
        .when(claims.delayTimeForClaimSet.matrixEnjinV603.is, claims.delayTimeForClaimSet.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
