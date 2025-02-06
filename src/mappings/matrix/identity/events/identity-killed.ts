import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, EventItem, BlockHeader } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityKilled.matrixEnjinV1000.is(event)) {
        return events.identity.identityKilled.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identityKilled.name)
}
