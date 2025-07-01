import { AccountId32 } from '~/pallet/common/types'

export type CollectionAccountDestroyed = {
    collectionId: bigint
    accountId: AccountId32
}
