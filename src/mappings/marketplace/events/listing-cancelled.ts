import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ListingCancelledEvent = {
    listingId: string
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<ListingCancelledEvent>()
        .when(marketplace.listingCancelled.matrixEnjinV603.is, marketplace.listingCancelled.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.listingCancelled)
        })
}
