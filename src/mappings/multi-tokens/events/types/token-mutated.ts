import { TokenMutation } from '@enjin/indexer/mappings/common/types'

export type TokenMutated = {
    collectionId: bigint
    tokenId: bigint
    mutation: TokenMutation
}
