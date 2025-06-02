import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensInfused,
    Token,
} from '../../../model'
import { Infused } from './types/infused'
import { unwrapAccount } from '../../../util/entities'
import {
    generateAccountTokenEventToken,
    generateAccountTokenEventCollection,
    generateAccountTokenEventAttributes,
} from '../../../util/event'

export function infused(event: EventItem): Infused {
    return match(event)
        .returnType<Infused>()
        .when(
            () => multiTokens.infused.matrixEnjinV1022.is(event),
            () => multiTokens.infused.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixEnjinV1012.is(event),
            () => multiTokens.infused.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1020.is(event),
            () => multiTokens.infused.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1010.is(event),
            () => multiTokens.infused.matrixV1010.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function infusedEventModel(
    item: EventItem,
    data: Infused,
    collection: Collection,
    token: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensInfused.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collection.id,
        tokenId: token.id,
        data: new MultiTokensInfused({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            amount: data.amount,
            accountId: unwrapAccount(data.accountId),
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: new Account({ id: unwrapAccount(data.accountId) }),
            event,
            collectionId: collection.id,
            tokenId: token.id,
            attributes: generateAccountTokenEventAttributes(token.attributes),
            meta: new AccountTokenEventMeta({
                collection: generateAccountTokenEventCollection(collection),
                token: generateAccountTokenEventToken(token),
            }),
        }),
    ]
}
