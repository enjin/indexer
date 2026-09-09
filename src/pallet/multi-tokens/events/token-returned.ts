import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MultiTokensTokenReturned } from '~/model'
import { TokenReturned } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function tokenReturned(event: EventItem): TokenReturned {
    if (multiTokens.tokenReturned.matrixV1040.is(event)) {
        return multiTokens.tokenReturned.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function tokenReturnedEventModel(item: EventItem, observedBlock: number, data: TokenReturned): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenReturned.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenReturned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            lender: data.lender,
            borrower: data.borrower,
            observedBlock: BigInt(observedBlock),
        }),
    })
}
