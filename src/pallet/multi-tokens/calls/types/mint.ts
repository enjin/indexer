import { MultiAddress, DefaultMintParams } from '~/pallet/common/types'

export type Mint = {
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}
