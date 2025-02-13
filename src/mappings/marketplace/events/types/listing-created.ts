import { H256, Listing } from '../../../common/types'

export type ListingCreated = {
    listingId: H256
    listing: Listing
}
