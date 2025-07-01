import { AccountId32 } from '~/pallet/common/types'

export type TokenAccountDestroyed = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
}
