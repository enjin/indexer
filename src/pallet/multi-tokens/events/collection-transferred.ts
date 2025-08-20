import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '~/model'
import { CollectionTransferred } from '~/pallet/multi-tokens/events/types'

export function collectionTransferred(event: EventItem): CollectionTransferred {
    return match(event)
        .returnType<CollectionTransferred>()
        .when(
            () => multiTokens.collectionTransferred.matrixEnjinV1004.is(event),
            () => multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionTransferredEventModel(item: EventItem, data: CollectionTransferred): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionTransferred.name,
        collectionId: data.collectionId.toString(),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionTransferred({
            collectionId: data.collectionId,
            owner: data.newOwner,
        }),
    })
}
