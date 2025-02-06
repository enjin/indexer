import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusPaymentUnlocked } from '../../../model'
import { updateEarlyBirdInfo } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is(event)) {
        return events.nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusPaymentUnlocked.name)
}
