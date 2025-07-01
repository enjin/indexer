import { H256, Listing } from '~/pallet/common/types'

export type ListingCreated = {
    listingId: H256
    listing: Listing
}
