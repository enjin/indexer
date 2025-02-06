import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Identity } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.identity.subIdentityRemoved.enjinV110.is(event)) {
        return events.identity.subIdentityRemoved.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.subIdentityRemoved.name)
}
