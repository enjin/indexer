import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenDestroyed } from '../../../model'
import { TokenDestroyed } from './types'

export function tokenDestroyed(event: EventItem): TokenDestroyed {
    return match(event)
        .returnType<TokenDestroyed>()
        .when(multiTokens.tokenDestroyed.matrixEnjinV603.is, multiTokens.tokenDestroyed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenDestroyedEventModel(item: EventItem, data: TokenDestroyed): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: data.caller,
        }),
    })
}
