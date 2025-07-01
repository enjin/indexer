import { AccountId32, H256 } from '~/pallet/common/types'

export type CounterOfferRemoved = {
    listingId: H256
    creator: AccountId32
}
