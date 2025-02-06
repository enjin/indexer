import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityCleared.enjinV110.is(event)) {
        return events.identity.identityCleared.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.identityCleared.name)
}
