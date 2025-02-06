import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '@enjin/indexer/model'

type CollectionTransferredEvent = {
    collectionId: bigint
    newOwner: string
}

export function collectionTransferred(event: EventItem): CollectionTransferredEvent {
    return match(event)
        .returnType<CollectionTransferredEvent>()
        .when(multiTokens.collectionTransferred.matrixEnjinV1004.is, () =>
            multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionTransferredEventModel(item: EventItem, data: any): EventModel | undefined {
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
