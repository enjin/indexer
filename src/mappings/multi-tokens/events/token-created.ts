import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenCreated } from '../../../model'
import { TokenCreated } from './types/token-created'
import { unwrapAccount } from '../../../common/util/entities'

export function tokenCreated(event: EventItem): TokenCreated {
    return match(event)
        .returnType<TokenCreated>()
        .when(
            () => multiTokens.tokenCreated.matrixEnjinV603.is(event),
            () => multiTokens.tokenCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenCreatedEventModel(item: EventItem, data: TokenCreated): EventModel | undefined {
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
