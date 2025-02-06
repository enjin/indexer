import { imOnline } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (imOnline.someOffline.enjinV100.is(event)) {
        return imOnline.someOffline.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(imOnline.someOffline)
}
