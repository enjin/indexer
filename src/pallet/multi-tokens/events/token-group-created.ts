import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenCreated, MultiTokensTokenGroupCreated } from '~/model'
import { TokenCreated } from '~/pallet/multi-tokens/events/types'
import { unwrapAccount } from '~/util/entities'
import { TokenGroupCreated } from './types/token-group-created'

export function tokenGroupCreated(event: EventItem): TokenGroupCreated {
    return match(event)
        .returnType<TokenGroupCreated>()
        .when(
            () => multiTokens.tokenGroupCreated.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupCreated.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupCreatedEventModel(item: EventItem, data: TokenGroupCreated): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        data: new MultiTokensTokenGroupCreated({
            collectionId: data.collectionId,
            tokenGroupId: data.tokenGroupId,
        }),
    })
}
