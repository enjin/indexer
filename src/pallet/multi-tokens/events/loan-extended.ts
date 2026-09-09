import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MultiTokensLoanExtended } from '~/model'
import { LoanExtended } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function loanExtended(event: EventItem): LoanExtended {
    if (multiTokens.loanExtended.matrixV1040.is(event)) {
        return multiTokens.loanExtended.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function loanExtendedEventModel(item: EventItem, observedBlock: number, data: LoanExtended): EventModel {
    return new EventModel({
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
            observedBlock: BigInt(observedBlock),
        }),
    })
}
