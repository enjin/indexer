import { AccountId32 } from '~/pallet/common/types'

export type Unapproved = {
    collectionId: bigint
    tokenId?: bigint
    owner: AccountId32
    operator: AccountId32
}
