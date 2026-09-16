import type { EventItem } from '~/contexts'
import type { CollectionTransferred } from '~/pallet/multi-tokens/events/types'
import type { SnsEvent } from '~/util/sns'

export function collectionTransferredSnsEvent(item: EventItem, data: CollectionTransferred): SnsEvent {
    return {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            owner: data.newOwner,
            extrinsic: item.extrinsic?.id,
        },
    }
}
