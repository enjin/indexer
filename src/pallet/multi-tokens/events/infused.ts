import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensInfused,
    Token,
} from '~/model'
import { Infused } from '~/pallet/multi-tokens/events/types' 

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
    account: Account,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const collectionId = collection ? collection.id : data.collectionId.toString()
    const tokenId = token ? token.id : `${collectionId}-${data.tokenId}`

    const event = new EventModel({
        id: item.id,
        name: MultiTokensInfused.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collectionId,
        tokenId: tokenId,
        data: new MultiTokensInfused({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            amount: data.amount,
            accountId: account.id,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: account,
            event,
            token,
            collection,
        }),
    ]
}
