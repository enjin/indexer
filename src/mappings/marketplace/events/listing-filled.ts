import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.listingFilled.matrixEnjinV1012.is(event)) {
        return marketplace.listingFilled.matrixEnjinV1012.decode(event)
    }

    if (marketplace.listingFilled.matrixEnjinV603.is(event)) {
        return marketplace.listingFilled.matrixEnjinV603.decode(event)
    }

    if (marketplace.listingFilled.matrixV1011.is(event)) {
        return marketplace.listingFilled.matrixV1011.decode(event)
    }

    if (marketplace.listingFilled.matrixV500.is(event)) {
        return marketplace.listingFilled.matrixV500.decode(event)
    }

    if (marketplace.listingFilled.enjinV1032.is(event)) {
        return marketplace.listingFilled.enjinV1032.decode(event)
    }

    if (marketplace.listingFilled.enjinV110.is(event)) {
        return marketplace.listingFilled.enjinV110.decode(event)
    }

    if (marketplace.listingFilled.v1031.is(event)) {
        return marketplace.listingFilled.v1031.decode(event)
    }

    if (marketplace.listingFilled.v110.is(event)) {
        return marketplace.listingFilled.v110.decode(event)
    }

    throw new UnsupportedEventError(marketplace.listingFilled)
}
