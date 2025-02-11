import { AccountId32 } from '../../../common/types'

export type TokenAccountDestroyed = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
}
