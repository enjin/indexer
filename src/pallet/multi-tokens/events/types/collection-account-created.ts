import { AccountId32 } from '~/pallet/common/types'

export type CollectionAccountCreated = {
    collectionId: bigint
    accountId: AccountId32
}
