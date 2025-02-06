import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { events, calls } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, CallItem, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.identity.subIdentityAdded.matrixEnjinV1000.is(event)) {
        return events.identity.subIdentityAdded.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.subIdentityAdded.name)
}
