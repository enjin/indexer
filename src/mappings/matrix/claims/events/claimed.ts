import { LessThan } from 'typeorm'
import { UnsupportedEventError } from '../../common/errors'
import { claims } from '../../types/generated/events'
import { claims as claimsStorage } from '../../types/generated/storage'
import { ClaimDetails, Event as EventModel, Extrinsic, ClaimRequest, Claim, ClaimsClaimed } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { getTotalUnclaimedAmount } from './common'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (claims.claimed.matrixEnjinV603.is(event)) {
        return claims.claimed.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimed.name)
}
