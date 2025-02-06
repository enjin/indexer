import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityCleared.matrixEnjinV1000.is(event)) {
        return events.identity.identityCleared.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identityCleared.name)
}
