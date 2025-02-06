import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, NominationPoolsRewardPaid } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.nominationPools.rewardPaid.enjinV100.is(event)) {
        return events.nominationPools.rewardPaid.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.rewardPaid.name)
}