import { H256 } from '~/pallet/common/types'

export type ListingSettlementAbandoned = {
    listingId: H256
    attempts: number
}
