import { Bytes } from '~/pallet/common/types'

export type AttributeRemoved = {
    collectionId: bigint
    tokenId?: bigint
    key: Bytes
}
