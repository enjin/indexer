import { AccountId32, H256 } from '../../../common/types'

export type CounterOfferRemoved = {
    listingId: H256
    creator: AccountId32
}
