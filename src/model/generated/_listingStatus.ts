import {ActiveListing} from "./_activeListing"
import {CancelledListing} from "./_cancelledListing"
import {FinalizedListing} from "./_finalizedListing"

export type ListingStatus = ActiveListing | CancelledListing | FinalizedListing

export function fromJsonListingStatus(json: any): ListingStatus {
  switch(json?.isTypeOf) {
    case 'ActiveListing': return new ActiveListing(undefined, json)
    case 'CancelledListing': return new CancelledListing(undefined, json)
    case 'FinalizedListing': return new FinalizedListing(undefined, json)
    default: throw new TypeError('Unknown json object passed as ListingStatus')
  }
}
