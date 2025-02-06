import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { CommonContext, CallItem, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.subIdentityAdded.enjinV110.is(event)) {
        return events.identity.subIdentityAdded.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.subIdentityAdded.name)
}
