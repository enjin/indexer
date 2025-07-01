import { AccountId32 } from '~/pallet/common/types'

export type TokenDestroyed = {
    collectionId: bigint
    tokenId: bigint
    caller: AccountId32
}
