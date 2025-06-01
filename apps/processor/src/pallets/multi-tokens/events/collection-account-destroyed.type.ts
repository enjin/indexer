import { AccountId32 } from '../../common/types'

export type CollectionAccountDestroyed = {
    collectionId: bigint
    accountId: AccountId32
}
