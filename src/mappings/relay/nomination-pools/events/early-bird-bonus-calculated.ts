import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusCalculated } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { updateEarlyBirdInfo } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusCalculated.enjinV1021.is(event)) {
        return events.nominationPools.earlyBirdBonusCalculated.enjinV1021.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusCalculated.name)
}