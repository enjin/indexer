import { UnsupportedEventError } from '../../common/errors'
import { claims } from '../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimsClaimRequested, Event as EventModel, Extrinsic } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'

function getEventData(event: EventItem) {
    if (claims.claimRequested.matrixEnjinV603.is(event)) {
        return claims.claimRequested.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimRequested.name)
}
