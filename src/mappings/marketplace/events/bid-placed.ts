import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type BidPlacedEvent = {
    listingId: string
    bid: any
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<BidPlacedEvent>()
        .when(marketplace.bidPlaced.matrixEnjinV603.is, marketplace.bidPlaced.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.bidPlaced)
        })
}
