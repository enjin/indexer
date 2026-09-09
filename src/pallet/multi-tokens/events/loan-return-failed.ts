import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MultiTokensLoanReturnFailed } from '~/model'
import { LoanReturnFailed } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { readableDispatchError } from '~/util/dispatch-error'
import { UnsupportedEventError } from '~/util/errors'

export function loanReturnFailed(event: EventItem): LoanReturnFailed {
    if (multiTokens.loanReturnFailed.matrixV1040.is(event)) {
        return multiTokens.loanReturnFailed.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function loanReturnFailedEventModel(item: EventItem, block: Block, data: LoanReturnFailed): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensLoanReturnFailed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensLoanReturnFailed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            expirationBlock: BigInt(data.expiration),
            observedBlock: BigInt(block.height),
            error: readableDispatchError(data.error, block._runtime),
        }),
    })
}
