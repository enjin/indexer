import { AccountId32, RootOrSigned } from '~/pallet/common/types'

export type Minted = {
    collectionId: bigint
    tokenId: bigint
    issuer: RootOrSigned
    recipient: AccountId32
    amount: bigint
}
