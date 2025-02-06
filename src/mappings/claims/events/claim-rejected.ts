import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (claims.claimRejected.matrixEnjinV603.is(event)) {
        return claims.claimRejected.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimRejected.matrixEnjinV603)
}
