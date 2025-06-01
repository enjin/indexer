import {FixedPriceData} from "./_fixedPriceData"
import {AuctionData} from "./_auctionData"
import {OfferData} from "./_offerData"

export type ListingData = FixedPriceData | AuctionData | OfferData

export function fromJsonListingData(json: any): ListingData {
    switch(json?.isTypeOf) {
        case 'FixedPriceData': return new FixedPriceData(undefined, json)
        case 'AuctionData': return new AuctionData(undefined, json)
        case 'OfferData': return new OfferData(undefined, json)
        default: throw new TypeError('Unknown json object passed as ListingData')
    }
}
