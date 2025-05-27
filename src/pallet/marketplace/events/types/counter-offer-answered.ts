import { AccountId32, Response, H256 } from '../../../common/types'

export type CounterOfferAnswered = {
    listingId: H256
    accepted?: boolean // Removed on v1011
    creator?: AccountId32 // Added on v1011
    response?: Response // Added on v1011
}
