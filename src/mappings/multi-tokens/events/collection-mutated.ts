import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionMutated } from '@enjin/indexer/model'

type CollectionMutatedEvent = {
    collectionId: bigint
    mutation: {
        owner?: string
        royalty: {
            __kind: string
            value?:
                | {
                      beneficiary: string
                      percentage: number
                  }
                | {
                      beneficiaries: { beneficiary: string; percentage: number }[]
                  }
        }
        explicitRoyaltyCurrencies?: { collectionId: bigint; tokenId: bigint }[]
    }
}

export function collectionMutated(event: EventItem): CollectionMutated {
    return match(event)
        .returnType<CollectionMutated>()
        .when(multiTokens.collectionMutated.matrixEnjinV603.is, multiTokens.collectionMutated.matrixEnjinV603.decode)
        .when(multiTokens.collectionMutated.v1050.is, multiTokens.collectionMutated.v1050.decode)
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
