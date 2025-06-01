import { AccountId32 } from '../../common/types'

export type TokenDestroyed = {
    collectionId: bigint
    tokenId: bigint
    caller: AccountId32
}
