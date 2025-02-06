import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (claims.delayTimeForClaimSet.matrixEnjinV603.is(event)) {
        return claims.delayTimeForClaimSet.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.delayTimeForClaimSet)
}
