import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ListingCreatedEvent = {
    listingId: string
    listing: any
}

export function listingCreated(event: EventItem): ListingCreatedEvent {
    return match(event)
        .returnType<ListingCreatedEvent>()
        .when(marketplace.listingCreated.matrixEnjinV1012.is, marketplace.listingCreated.matrixEnjinV1012.decode)
        .when(marketplace.listingCreated.matrixEnjinV603.is, marketplace.listingCreated.matrixEnjinV603.decode)
        .when(marketplace.listingCreated.matrixV1011.is, marketplace.listingCreated.matrixV1011.decode)
        .when(marketplace.listingCreated.matrixV1010.is, marketplace.listingCreated.matrixV1010.decode)
        .when(marketplace.listingCreated.matrixV500.is, marketplace.listingCreated.matrixV500.decode)
        .when(marketplace.listingCreated.enjinV1032.is, marketplace.listingCreated.enjinV1032.decode)
        .when(marketplace.listingCreated.enjinV110.is, marketplace.listingCreated.enjinV110.decode)
        .when(marketplace.listingCreated.v1050.is, marketplace.listingCreated.v1050.decode)
        .when(marketplace.listingCreated.v1031.is, marketplace.listingCreated.v1031.decode)
        .when(marketplace.listingCreated.v1030.is, marketplace.listingCreated.v1030.decode)
        .when(marketplace.listingCreated.v110.is, marketplace.listingCreated.v110.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
