import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type DelayTimeForClaimSetEvent = {
    delayTime: number
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<DelayTimeForClaimSetEvent>()
        .when(claims.delayTimeForClaimSet.matrixEnjinV603.is, () => claims.delayTimeForClaimSet.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(claims.delayTimeForClaimSet)
        })
}
