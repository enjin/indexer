import { AccountId32, RootOrSigned } from '@enjin/indexer/mappings/common/types'

export type Minted = {
    collectionId: bigint
    tokenId: bigint
    issuer: RootOrSigned
    recipient: AccountId32
    amount: bigint
}
