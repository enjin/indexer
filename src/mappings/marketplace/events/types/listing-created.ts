import { H256, Listing } from '@enjin/indexer/mappings/common/types'

export type ListingCreated = {
    listingId: H256
    listing: Listing
}
