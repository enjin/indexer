import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Event as EventModel, Extrinsic, ImOnlineSomeOffline } from '../../../model'

function getEventData(event: EventItem) {
    if (events.imOnline.someOffline.enjinV100.is(event)) {
        return events.imOnline.someOffline.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.imOnline.someOffline.name)
}
