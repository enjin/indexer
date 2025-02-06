import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ListingCancelledEvent = {
    listingId: string
}

export function listingCancelled(event: EventItem): ListingCancelledEvent {
    return match(event)
        .returnType<ListingCancelledEvent>()
        .when(marketplace.listingCancelled.matrixEnjinV603.is, marketplace.listingCancelled.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
