import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountDestroyed } from '@enjin/indexer/model'

type TokenAccountDestroyedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
}

export function tokenAccountDestroyed(event: EventItem): TokenAccountDestroyedEvent {
    return match(event)
        .returnType<TokenAccountDestroyedEvent>()
        .when(multiTokens.tokenAccountDestroyed.matrixEnjinV603.is, () =>
            multiTokens.tokenAccountDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenAccountDestroyedEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: data.accountId,
        }),
    })
}
