import { AccountId32 } from '~/pallet/common/types'

export type CollectionCreated = {
    collectionId: bigint
    owner: AccountId32
}
