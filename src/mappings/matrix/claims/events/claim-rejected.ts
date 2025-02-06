import { claims } from '../../types/generated/events'
import { UnsupportedEventError } from '../../common/errors'
import { ClaimRequest, ClaimDetails, Event as EventModel } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getTotalUnclaimedAmount } from './common'

function getEventData(event: EventItem) {
    if (claims.claimRejected.matrixEnjinV603.is(event)) {
        return claims.claimRejected.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimRejected.matrixEnjinV603.name)
}
