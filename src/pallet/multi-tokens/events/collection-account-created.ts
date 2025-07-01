import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountCreated } from '~/model'
import { CollectionAccountCreated } from '~/pallet/multi-tokens/events/types'

export function collectionAccountCreated(event: EventItem): CollectionAccountCreated {
    return match(event)
        .returnType<CollectionAccountCreated>()
        .when(
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.is(event),
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionAccountCreatedEventModel(item: EventItem, data: CollectionAccountCreated) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionAccountCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountCreated({
            collectionId: data.collectionId,
            account: data.accountId,
        }),
    })
}
