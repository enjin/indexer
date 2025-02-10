import { Bytes } from '@enjin/indexer/mappings/common/types'

export type AttributeRemoved = {
    collectionId: bigint
    tokenId?: bigint
    key: Bytes
}
