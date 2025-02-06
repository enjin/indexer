import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import { Event as EventModel, Identity, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Data } from '../../../types/generated/enjinV110'

function getEventData(event: EventItem) {
    if (events.identity.identitySet.enjinV110.is(event)) {
        return events.identity.identitySet.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.identitySet.name)
}
