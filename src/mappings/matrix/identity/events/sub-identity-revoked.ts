import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.identity.subIdentityRevoked.matrixEnjinV1000.is(event)) {
        return events.identity.subIdentityRevoked.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.subIdentityRevoked.name)
}
