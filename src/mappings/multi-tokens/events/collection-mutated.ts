import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionMutated } from '@enjin/indexer/model'

type CollectionMutatedEvent = {
    collectionId: bigint
    mutation: any
}

export function collectionMutated(event: EventItem): CollectionMutatedEvent {
    return match(event)
        .returnType<CollectionMutatedEvent>()
        .when(multiTokens.collectionMutated.matrixEnjinV603.is, () => multiTokens.collectionMutated.matrixEnjinV603.decode(event))
        .when(multiTokens.collectionMutated.v1050.is, () => multiTokens.collectionMutated.v1050.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: null,
        data: new MultiTokensCollectionMutated({
            collectionId: data.collectionId,
        }),
    })
}
