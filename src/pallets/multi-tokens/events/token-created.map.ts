import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenCreated } from '../../../model'
import { TokenCreated } from '../types'
import { unwrapAccount } from '../../../utils/entities'

export function tokenCreated(event: EventItem): TokenCreatedType {
    return match(event)
        .returnType<TokenCreatedType>()
        .when(
            () => multiTokens.tokenCreated.matrixEnjinV603.is(event),
            () => multiTokens.tokenCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenCreatedEventModel(item: EventItem, data: TokenCreatedType): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: unwrapAccount(data.issuer),
            initialSupply: data.initialSupply,
        }),
    })
}
