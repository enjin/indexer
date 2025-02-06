import { UnsupportedEventError } from '../../common/errors'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { ClaimDetails } from '../../model'
import { claims } from '../../types/generated/events'
import { getTotalUnclaimedAmount } from './common'

function getEventData(event: EventItem) {
    if (claims.delayTimeForClaimSet.matrixEnjinV603.is(event)) {
        return claims.delayTimeForClaimSet.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.delayTimeForClaimSet.name)
}
