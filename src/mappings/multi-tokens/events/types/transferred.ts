import { AccountId32 } from '../../../common/types'

export type Transferred = {
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
    from: AccountId32
    to: AccountId32
    amount: bigint
}
