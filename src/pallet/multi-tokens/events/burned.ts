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
import { SnsCause } from '~/util/sns-cause'
import { TokenDisplay } from '~/util/token-display'
import { Burned, EphemeralTokenDestroyed } from '~/pallet/multi-tokens/events/types'

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
    token: Token | null,
    expiry: EphemeralTokenDestroyed | undefined,
    display: TokenDisplay | undefined
): [EventModel, AccountTokenEvent | undefined] {
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
            cause: expiry ? SnsCause.ephemeralExpiry : SnsCause.burn,
            expirationBlock: expiry ? BigInt(expiry.expiration) : null,
            tokenName: display?.name ?? null,
            tokenImage: display?.image ?? null,
        }),
    })

    // A token the chain destroyed earlier in the block still has its collection; the history keeps the burn there,
    // the way TokenDestroyed keeps the token's earlier history with the token unlinked.
    if (!token && !collection) {
        return [event, undefined]
    }

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
