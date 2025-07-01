import { AccountId32 } from '~/pallet/common/types'
import { RootOrSigned } from '~/pallet/common/types'

export type Infused = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32 | RootOrSigned
    amount: bigint
}
