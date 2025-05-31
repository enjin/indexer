import { Bytes } from '../../common/types'

export type AttributeRemoved = {
    collectionId: bigint
    tokenId?: bigint
    key: Bytes
}
