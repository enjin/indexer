import {FixedPriceState} from "./_fixedPriceState"
import {AuctionState} from "./_auctionState"

export type ListingState = FixedPriceState | AuctionState

export function fromJsonListingState(json: any): ListingState {
    switch(json?.isTypeOf) {
        case 'FixedPriceState': return new FixedPriceState(undefined, json)
        case 'AuctionState': return new AuctionState(undefined, json)
        default: throw new TypeError('Unknown json object passed as ListingState')
    }
}
