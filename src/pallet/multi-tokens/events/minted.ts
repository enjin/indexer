import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensMinted,
    Token,
} from '../../../model'
import { Minted } from './types'
import { unwrapAccount } from '../../../util/entities'
import { generateAccountTokenEventCollection, generateAccountTokenEventToken } from '../../../util/event'

export function minted(event: EventItem): Minted {
    return match(event)
        .returnType<Minted>()
        .when(
            () => multiTokens.minted.matrixEnjinV603.is(event),
            () => multiTokens.minted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function mintedEventModel(
    item: EventItem,
    data: Minted,
    creator: Account,
    recipient: Account,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const collectionId = collection ? collection.id : data.collectionId.toString()
    const tokenId = token ? token.id : `${collectionId}-${data.tokenId}`

    const event = new EventModel({
        id: item.id,
        name: MultiTokensMinted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collectionId,
        tokenId: tokenId,
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: tokenId,
            issuer: unwrapAccount(data.issuer),
            recipient: data.recipient,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: creator,
            to: recipient,
            event,
            collectionId: collectionId,
            tokenId: tokenId,
            token: generateAccountTokenEventToken(token),
            collection: generateAccountTokenEventCollection(collection),
        }),
    ]
}
