import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '@enjin/indexer/model'

type CollectionAccountDestroyedEvent = {
    collectionId: bigint
    accountId: string
}

export function collectionAccountDestroyed(event: EventItem): CollectionAccountDestroyedEvent {
    return match(event)
        .returnType<CollectionAccountDestroyedEvent>()
        .when(
            multiTokens.collectionAccountDestroyed.matrixEnjinV603.is,
            multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountDestroyed({
            collectionId: data.collectionId,
            account: data.accountId,
        }),
    })
}
