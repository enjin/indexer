import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CounterOfferPlacedEvent = {
    listingId: string
    counterOffer: any
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<CounterOfferPlacedEvent>()
        .when(marketplace.counterOfferPlaced.matrixEnjinV1012.is, marketplace.counterOfferPlaced.matrixEnjinV1012.decode)
        .when(marketplace.counterOfferPlaced.matrixV1011.is, marketplace.counterOfferPlaced.matrixV1011.decode)
        .when(marketplace.counterOfferPlaced.matrixV1010.is, marketplace.counterOfferPlaced.matrixV1010.decode)
        .when(marketplace.counterOfferPlaced.v1031.is, marketplace.counterOfferPlaced.v1031.decode)
        .when(marketplace.counterOfferPlaced.v1030.is, marketplace.counterOfferPlaced.v1030.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.counterOfferPlaced)
        })
}
