import { TokenMutation } from '~/pallet/common/types'

export type TokenMutated = {
    collectionId: bigint
    tokenId: bigint
    mutation: TokenMutation
}
