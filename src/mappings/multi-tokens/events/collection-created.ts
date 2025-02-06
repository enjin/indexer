import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionCreated } from '@enjin/indexer/model'

type CollectionCreatedEvent = {
    collectionId: bigint
    owner: string
}

export function collectionCreated(event: EventItem): CollectionCreatedEvent {
    return match(event)
        .returnType<CollectionCreatedEvent>()
        .when(multiTokens.collectionCreated.matrixEnjinV603.is, () => multiTokens.collectionCreated.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: data.owner,
        }),
    })
}
