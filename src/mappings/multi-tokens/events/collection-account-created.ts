import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountCreated } from '@enjin/indexer/model'
import { CollectionAccountCreated } from './types'

export function collectionAccountCreated(event: EventItem): CollectionAccountCreated {
    return match(event)
        .returnType<CollectionAccountCreated>()
        .when(
            multiTokens.collectionAccountCreated.matrixEnjinV603.is,
            multiTokens.collectionAccountCreated.matrixEnjinV603.decode
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
