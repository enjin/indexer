import { AccountId32 } from '../../../common/types'

export type CollectionDestroyed = {
    collectionId: bigint
    caller: AccountId32
}
