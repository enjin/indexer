import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.listingCreated.matrixEnjinV1012.is(event)) {
        return marketplace.listingCreated.matrixEnjinV1012.decode(event)
    }
    if (marketplace.listingCreated.matrixEnjinV603.is(event)) {
        return marketplace.listingCreated.matrixEnjinV603.decode(event)
    }

    if (marketplace.listingCreated.matrixV1011.is(event)) {
        return marketplace.listingCreated.matrixV1011.decode(event)
    }
    if (marketplace.listingCreated.matrixV1010.is(event)) {
        return marketplace.listingCreated.matrixV1010.decode(event)
    }
    if (marketplace.listingCreated.matrixV500.is(event)) {
        return marketplace.listingCreated.matrixV500.decode(event)
    }

    if (marketplace.listingCreated.enjinV1032.is(event)) {
        return marketplace.listingCreated.enjinV1032.decode(event)
    }
    if (marketplace.listingCreated.enjinV110.is(event)) {
        return marketplace.listingCreated.enjinV110.decode(event)
    }

    if (marketplace.listingCreated.v1050.is(event)) {
        return marketplace.listingCreated.v1050.decode(event)
    }
    if (marketplace.listingCreated.v1031.is(event)) {
        return marketplace.listingCreated.v1031.decode(event)
    }
    if (marketplace.listingCreated.v1030.is(event)) {
        return marketplace.listingCreated.v1030.decode(event)
    }
    if (marketplace.listingCreated.v110.is(event)) {
        return marketplace.listingCreated.v110.decode(event)
    }

    throw new UnsupportedEventError(marketplace.listingCreated)
}
