import { FreezeType } from '@enjin/indexer/mappings/common/types'

export type Freeze = {
    collectionId: bigint
    freezeType: FreezeType
}
