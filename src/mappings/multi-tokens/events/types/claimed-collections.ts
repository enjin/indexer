import { AccountId32, H160, CollectionIdPair } from '../../../common/types'

export type ClaimedCollections = {
    accountId: AccountId32
    ethereumAddress: H160
    collectionIds: bigint[] | CollectionIdPair[] // Changed from CollectionIdPair[] to bigint[] in v1021
}
