import { FreezeType } from '~/pallet/common/types'

export type Freeze = {
    collectionId: bigint
    freezeType: FreezeType
}
