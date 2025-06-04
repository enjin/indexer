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
    eventId: string,
    data: {
        collectionId: bigint
        tokenId: bigint
        amount: bigint
    },
    relation: {
        extrinsic: Extrinsic | null
        issuer: Account
        recipient: Account
        collection: Collection | null
        token: Token | null
    }
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: eventId,
        name: MultiTokensMinted.name,
        extrinsic: relation.extrinsic,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId.toString(),
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            issuer: relation.issuer.id,
            recipient: relation.recipient.id,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: eventId,
            from: relation.issuer,
            to: relation.recipient,
            event,
            token: relation.token,
            collection: relation.collection,
        }),
    ]
}
