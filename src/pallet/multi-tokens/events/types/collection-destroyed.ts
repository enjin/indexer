import { AccountId32 } from '~/pallet/common/types'

export type CollectionDestroyed = {
    collectionId: bigint
    caller: AccountId32
}
