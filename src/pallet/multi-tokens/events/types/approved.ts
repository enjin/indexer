import { AccountId32 } from '../../../common/types'

export type Approved = {
    collectionId: bigint
    tokenId?: bigint
    owner: AccountId32
    operator: AccountId32
    amount?: bigint
    expiration?: number
}
