import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityKilled.enjinV110.is(event)) {
        return events.identity.identityKilled.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.identityKilled.name)
}
