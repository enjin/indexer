import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import {
    Collection,
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPoolsBonded,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'

function getEventData(event: EventItem) {
    if (nominationPools.stateChanged.enjinV100.is(event)) {
        return nominationPools.stateChanged.enjinV100.decode(event)
    }

    if (nominationPools.stateChanged.v103.is(event)) {
        return nominationPools.stateChanged.v103.decode(event)
    }

    if (nominationPools.stateChanged.v100.is(event)) {
        return nominationPools.stateChanged.v100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.stateChanged)
}
