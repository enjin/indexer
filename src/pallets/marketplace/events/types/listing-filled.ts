import { H256, AccountId32 } from '../../../common/types'

export type ListingFilled = {
    listingId: H256
    buyer: AccountId32
    price?: bigint // Added on v1011
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}
