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
    MultiTokensTransferred,
    Token,
} from '~/model'
import { Transferred } from '~/pallet/multi-tokens/events/types'

export function transferred(event: EventItem): Transferred {
    return match(event)
        .when(
            () => multiTokens.transferred.matrixEnjinV603.is(event),
            () => multiTokens.transferred.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function transferredEventModel(
    item: EventItem,
    data: Transferred,
    from: Account,
    to: Account,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const collectionId = collection ? collection.id : data.collectionId.toString()
    const tokenId = token ? token.id : `${collectionId}-${data.tokenId}`

    const event = new EventModel({
        id: item.id,
        name: MultiTokensTransferred.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collectionId,
        tokenId: tokenId,
        data: new MultiTokensTransferred({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: tokenId,
            operator: data.operator,
            from: from.id,
            to: to.id,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from,
            to,
            event,
            token,
            collection,
        }),
    ]
}
