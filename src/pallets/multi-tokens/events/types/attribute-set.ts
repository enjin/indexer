import { Bytes } from '../../../common/types'

export type AttributeSet = {
    collectionId: bigint
    tokenId?: bigint
    key: Bytes
    value: Bytes
}
