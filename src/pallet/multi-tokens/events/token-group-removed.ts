import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupRemoved } from '~/model'
import { TokenGroupRemoved } from '~/pallet/multi-tokens/events/types'

export function tokenGroupRemoved(event: EventItem): TokenGroupRemoved {
    return match(event)
        .returnType<TokenGroupRemoved>()
        .when(
            () => multiTokens.tokenGroupRemoved.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupRemoved.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupRemovedEventModel(item: EventItem, data: TokenGroupRemoved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupRemoved.name,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId.toString(),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensTokenGroupRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            tokenGroupId: data.tokenGroupId,
        }),
    })
}
