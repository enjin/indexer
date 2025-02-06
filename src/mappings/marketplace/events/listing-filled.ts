import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ListingFilledEvent = {
    listingId: string
    buyer: string
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

export function listingFilled(event: EventItem): ListingFilledEvent {
    return match(event)
        .returnType<ListingFilledEvent>()
        .when(marketplace.listingFilled.matrixEnjinV1012.is, marketplace.listingFilled.matrixEnjinV1012.decode)
        .when(marketplace.listingFilled.matrixEnjinV603.is, marketplace.listingFilled.matrixEnjinV603.decode)
        .when(marketplace.listingFilled.matrixV1011.is, marketplace.listingFilled.matrixV1011.decode)
        .when(marketplace.listingFilled.matrixV500.is, marketplace.listingFilled.matrixV500.decode)
        .when(marketplace.listingFilled.enjinV1032.is, marketplace.listingFilled.enjinV1032.decode)
        .when(marketplace.listingFilled.enjinV110.is, marketplace.listingFilled.enjinV110.decode)
        .when(marketplace.listingFilled.v1031.is, marketplace.listingFilled.v1031.decode)
        .when(marketplace.listingFilled.v110.is, marketplace.listingFilled.v110.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
