import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionTransferCancelled } from '~/model'
import { CollectionTransferCancelled } from '~/pallet/multi-tokens/events/types'

export function collectionTransferCancelled(event: EventItem): CollectionTransferCancelled {
    return match(event)
        .returnType<CollectionTransferCancelled>()
        .when(
            () => multiTokens.collectionTransferCancelled.matrixEnjinV1004.is(event),
            () => multiTokens.collectionTransferCancelled.matrixEnjinV1004.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionTransferCancelledEventModel(
    item: EventItem,
    data: CollectionTransferCancelled
): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionTransferCancelled.name,
        collectionId: data.collectionId.toString(),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionTransferCancelled({
            collectionId: data.collectionId,
        }),
    })
}
