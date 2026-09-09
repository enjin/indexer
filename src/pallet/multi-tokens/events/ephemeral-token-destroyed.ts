import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MultiTokensEphemeralTokenDestroyed } from '~/model'
import { EphemeralTokenDestroyed } from '~/pallet/multi-tokens/events/types'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function ephemeralTokenDestroyed(event: EventItem): EphemeralTokenDestroyed {
    if (multiTokens.ephemeralTokenDestroyed.matrixV1040.is(event)) {
        return multiTokens.ephemeralTokenDestroyed.matrixV1040.decode(event)
    }

    throw new UnsupportedEventError(event)
}

export function ephemeralTokenDestroyedEventModel(
    item: EventItem,
    blockHeight: number,
    data: EphemeralTokenDestroyed
): EventModel {
    return new EventModel({
        id: item.id,
        name: MultiTokensEphemeralTokenDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensEphemeralTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            expirationBlock: BigInt(data.expiration),
            observedBlock: BigInt(blockHeight),
        }),
    })
}
