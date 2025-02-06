import { UnknownVersionError } from '../../../common/errors'
import { events, storage } from '../../../types/generated'
import { Event as EventModel, IdentityRegistrar } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.registrarAdded.enjinV110.is(event)) {
        return events.identity.registrarAdded.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.registrarAdded.name)
}
