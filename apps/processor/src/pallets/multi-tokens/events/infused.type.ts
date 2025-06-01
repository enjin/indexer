import { AccountId32 } from '../../common/types'
import { RootOrSigned } from '../../common/types'

export type Infused = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32 | RootOrSigned
    amount: bigint
}
