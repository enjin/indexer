import { AccountId32 } from '../../../common/types'

export type Burned = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    amount: bigint
}
