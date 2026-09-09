import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MultiTokensEphemeralCleanupFailed } from '~/model'
import { EphemeralCleanupFailed } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { readableDispatchError } from '~/util/dispatch-error'
import { UnsupportedEventError } from '~/util/errors'

export function ephemeralCleanupFailed(event: EventItem): EphemeralCleanupFailed {
    if (multiTokens.ephemeralCleanupFailed.matrixV1040.is(event)) {
        return multiTokens.ephemeralCleanupFailed.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function ephemeralCleanupFailedEventModel(
    item: EventItem,
    block: Block,
    data: EphemeralCleanupFailed
): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensEphemeralCleanupFailed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensEphemeralCleanupFailed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            expirationBlock: BigInt(data.expiration),
            observedBlock: BigInt(block.height),
            error: readableDispatchError(data.error, block._runtime),
        }),
    })
}
