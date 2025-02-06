import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type AuctionFinalizedEvent = {
    listingId: string
    winningBid?: any
    protocolFee: bigint
    royalty: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<AuctionFinalizedEvent>()
        .when(marketplace.auctionFinalized.matrixEnjinV603.is, marketplace.auctionFinalized.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(marketplace.auctionFinalized)
        })
}
