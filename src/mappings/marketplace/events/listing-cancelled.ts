import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.listingCancelled.matrixEnjinV603.is(event)) {
        return marketplace.listingCancelled.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(marketplace.listingCancelled)
}
