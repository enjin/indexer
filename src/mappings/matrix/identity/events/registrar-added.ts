import { UnsupportedEventError } from '../../common/errors'
import { events, storage } from '../../types/generated'
import { Event as EventModel, IdentityRegistrar } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.identity.registrarAdded.matrixEnjinV1000.is(event)) {
        return events.identity.registrarAdded.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.registrarAdded.name)
}
