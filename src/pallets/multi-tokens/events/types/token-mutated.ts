import { TokenMutation } from '../../../common/types'

export type TokenMutated = {
    collectionId: bigint
    tokenId: bigint
    mutation: TokenMutation
}
