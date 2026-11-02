import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensLoanExtended,
    Token,
} from '~/model'
import { LoanExtended } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function loanExtended(event: EventItem): LoanExtended {
    if (multiTokens.loanExtended.matrixEnjinV1041.is(event)) {
        return multiTokens.loanExtended.matrixEnjinV1041.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function loanExtendedEventModel(
    item: EventItem,
    data: LoanExtended,
    lender: Account | undefined,
    borrower: Account | undefined,
    collection: Collection | null,
    token: Token | null
): [EventModel, AccountTokenEvent] {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensLoanExtended.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensLoanExtended({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            oldExpirationBlock: BigInt(data.oldExpiration),
            newExpirationBlock: BigInt(data.newExpiration),
        }),
    })

    return [event, new AccountTokenEvent({ id: item.id, event, from: lender, to: borrower ?? null, collection, token })]
}
