import { MultiAddress, DefaultMintParams } from '../../../common/types'

export type Mint = {
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}
