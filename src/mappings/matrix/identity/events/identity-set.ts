import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { calls, events } from '../../types/generated'
import { Event as EventModel, Identity, JudgementType, Registration } from '../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { Data } from '../../types/generated/v1003'

function getEventData(event: EventItem) {
    if (events.identity.identitySet.matrixEnjinV1000.is(event)) {
        return events.identity.identitySet.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identitySet.name)
}
