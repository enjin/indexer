import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenLent,
    Token,
} from '~/model'
import { TokenLent } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function tokenLent(event: EventItem): TokenLent {
    if (multiTokens.tokenLent.matrixV1040.is(event)) {
        return multiTokens.tokenLent.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function tokenLentEventModel(
    item: EventItem,
    observedBlock: number,
    data: TokenLent,
    lender: Account,
    borrower: Account,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensTokenLent.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenLent({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            lender: data.lender,
            borrower: data.borrower,
            expirationBlock: BigInt(data.expiration),
            observedBlock: BigInt(observedBlock),
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: lender,
            to: borrower,
            event,
            collection,
            token,
        }),
    ]
}
