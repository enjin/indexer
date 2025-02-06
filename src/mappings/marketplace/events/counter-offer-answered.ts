import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (marketplace.counterOfferAnswered.matrixEnjinV1012.is(event)) {
        return marketplace.counterOfferAnswered.matrixEnjinV1012.decode(event)
    }

    if (marketplace.counterOfferAnswered.matrixV1011.is(event)) {
        return marketplace.counterOfferAnswered.matrixV1011.decode(event)
    }

    if (marketplace.counterOfferAnswered.matrixV1010.is(event)) {
        return marketplace.counterOfferAnswered.matrixV1010.decode(event)
    }

    if (marketplace.counterOfferAnswered.v1031.is(event)) {
        return marketplace.counterOfferAnswered.v1031.decode(event)
    }

    if (marketplace.counterOfferAnswered.v1030.is(event)) {
        return marketplace.counterOfferAnswered.v1030.decode(event)
    }

    throw new UnsupportedEventError(marketplace.counterOfferAnswered)
}
