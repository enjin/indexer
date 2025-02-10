import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountDestroyed } from '@enjin/indexer/model'
import { TokenAccountDestroyed } from './types'

export function tokenAccountDestroyed(event: EventItem): TokenAccountDestroyed {
    return match(event)
        .returnType<TokenAccountDestroyed>()
        .when(multiTokens.tokenAccountDestroyed.matrixEnjinV603.is, multiTokens.tokenAccountDestroyed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenAccountDestroyedEventModel(item: EventItem, data: TokenAccountDestroyed) {
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
