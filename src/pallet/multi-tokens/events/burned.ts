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
    MultiTokensBurned,
    Token,
} from '~/model'
import { Burned } from '~/pallet/multi-tokens/events/types' 

export function burned(event: EventItem): Burned {
    return match(event)
        .returnType<Burned>()
        .when(
            () => multiTokens.burned.matrixEnjinV603.is(event),
            () => multiTokens.burned.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function burnedEventModel(
    item: EventItem,
    data: Burned,
    account: Account,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] | undefined | EventModel {
    const collectionId = collection ? collection.id : data.collectionId.toString()
    const tokenId = token ? token.id : `${collectionId}-${data.tokenId}`

    const event = new EventModel({
        id: item.id,
        name: MultiTokensBurned.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collectionId,
        tokenId: tokenId,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: tokenId,
            account: data.accountId,
            amount: data.amount,
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
