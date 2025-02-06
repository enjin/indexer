import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is(event)) {
        return marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode(event)
    }

    throw new UnsupportedEventError(marketplace.listingRemovedUnderMinimum)
}
