import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CounterOfferAnsweredEvent = {
    listingId: string
    creator?: string
    response?: any
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<CounterOfferAnsweredEvent>()
        .when(marketplace.counterOfferAnswered.matrixEnjinV1012.is, marketplace.counterOfferAnswered.matrixEnjinV1012.decode)
        .when(marketplace.counterOfferAnswered.matrixV1011.is, marketplace.counterOfferAnswered.matrixV1011.decode)
        .when(marketplace.counterOfferAnswered.matrixV1010.is, marketplace.counterOfferAnswered.matrixV1010.decode)
        .when(marketplace.counterOfferAnswered.v1031.is, marketplace.counterOfferAnswered.v1031.decode)
        .when(marketplace.counterOfferAnswered.v1030.is, marketplace.counterOfferAnswered.v1030.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.counterOfferAnswered)
        })
}
