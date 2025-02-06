import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { NominationPool, PoolState } from '../../../model'

function getEventData(event: EventItem) {
    if (events.nominationPools.stateChanged.enjinV100.is(event)) {
        return events.nominationPools.stateChanged.enjinV100.decode(event)
    }

    if (events.nominationPools.stateChanged.v103.is(event)) {
        return events.nominationPools.stateChanged.v103.decode(event)
    }

    if (events.nominationPools.stateChanged.v100.is(event)) {
        return events.nominationPools.stateChanged.v100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.stateChanged.name)
}
