import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionMutated } from '~/model'
import { CollectionMutated } from '~/pallet/multi-tokens/events/types' 

export function collectionMutated(event: EventItem): CollectionMutated {
    return match(event)
        .returnType<CollectionMutated>()
        .when(
            () => multiTokens.collectionMutated.matrixEnjinV1022.is(event),
            () => multiTokens.collectionMutated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.matrixEnjinV603.is(event),
            () => multiTokens.collectionMutated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.matrixV1020.is(event),
            () => multiTokens.collectionMutated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.v1050.is(event),
            () => multiTokens.collectionMutated.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionMutatedEventModel(item: EventItem, data: CollectionMutated): EventModel | undefined {
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
