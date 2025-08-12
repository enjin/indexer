import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupAdded } from '~/model'
import { TokenGroupAdded } from '~/pallet/multi-tokens/events/types'

export function tokenGroupAdded(event: EventItem): TokenGroupAdded {
    return match(event)
        .returnType<TokenGroupAdded>()
        .when(
            () => multiTokens.tokenGroupAdded.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupAdded.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupAddedEventModel(item: EventItem, data: TokenGroupAdded): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        data: new MultiTokensTokenGroupAdded({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            tokenGroupId: data.tokenGroupId,
        }),
    })
}
