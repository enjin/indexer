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
    if (nominationPools.rewardPaid.enjinV100.is(event)) {
        return nominationPools.rewardPaid.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.rewardPaid)
}
