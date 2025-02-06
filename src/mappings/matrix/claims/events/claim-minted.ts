import { UnsupportedEventError } from '../../common/errors'
import { claims } from '../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimDetails, Event as EventModel } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getTotalUnclaimedAmount } from './common'

function getEventData(event: EventItem) {
    if (claims.claimMinted.matrixEnjinV603.is(event)) {
        return claims.claimMinted.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimMinted.name)
}
