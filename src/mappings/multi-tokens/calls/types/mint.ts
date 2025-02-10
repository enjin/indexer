import { MultiAddress, DefaultMintParams } from '@enjin/indexer/mappings/common/types'

export type Mint = {
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}
