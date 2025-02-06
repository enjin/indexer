import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CounterOfferRemovedEvent = {
    listingId: string
    creator: string
}

export function counterOfferRemoved(event: EventItem) {
    return match(event)
        .returnType<CounterOfferRemovedEvent>()
        .when(marketplace.counterOfferRemoved.matrixEnjinV1012.is, marketplace.counterOfferRemoved.matrixEnjinV1012.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.counterOfferRemoved)
        })
}
