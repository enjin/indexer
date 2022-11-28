import {FixedPriceData} from "./_fixedPriceData"
import {AuctionData} from "./_auctionData"

export type ListingData = FixedPriceData | AuctionData

export function fromJsonListingData(json: any): ListingData {
    switch(json?.isTypeOf) {
        case 'FixedPriceData': return new FixedPriceData(undefined, json)
        case 'AuctionData': return new AuctionData(undefined, json)
        default: throw new TypeError('Unknown json object passed as ListingData')
    }
}
