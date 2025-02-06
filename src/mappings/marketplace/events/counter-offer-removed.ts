import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.counterOfferRemoved.matrixEnjinV1012.is(event)) {
        return marketplace.counterOfferRemoved.matrixEnjinV1012.decode(event)
    }
    throw new UnsupportedEventError(marketplace.counterOfferRemoved)
}
