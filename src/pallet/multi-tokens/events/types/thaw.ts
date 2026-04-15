import { FreezeType, ThawType } from '~/pallet/common/types'

export type Thaw = {
    collectionId: bigint
    thawType?: ThawType
    freezeType?: FreezeType // removed in v1070
}
