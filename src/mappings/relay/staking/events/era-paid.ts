import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Era, Event as EventModel, Extrinsic, StakingEraPaid } from '../../../model'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (events.staking.eraPaid.enjinV100.is(event)) {
        return events.staking.eraPaid.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.staking.eraPaid.enjinV100.name)
}