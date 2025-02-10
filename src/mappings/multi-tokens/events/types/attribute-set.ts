import { Bytes } from '@enjin/indexer/mappings/common/types'

export type AttributeSet = {
    collectionId: bigint
    tokenId?: bigint
    key: Bytes
    value: Bytes
}
