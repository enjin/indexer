import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ListingRemovedUnderMinimumEvent = {
    listingId: string
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<ListingRemovedUnderMinimumEvent>()
        .when(
            marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is,
            marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode
        )
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.listingRemovedUnderMinimum)
        })
}
