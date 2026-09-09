import { EventItem } from '~/contexts'
import {
    Event as EventModel,
    Extrinsic,
    MintRateLimit as MintRateLimitModel,
    MultiTokensMintRateLimitChangeCancelled,
    MultiTokensMintRateLimitChangeScheduled,
    MultiTokensMintRateLimitUpdated,
} from '~/model'
import {
    MintRateLimitChangeCancelled,
    MintRateLimitChangeScheduled,
    MintRateLimitUpdated,
} from '~/pallet/multi-tokens/events/types'
import { normalizeOptionalMintRateLimit } from '~/pallet/multi-tokens/storage/mint-rate-limit'
import { multiTokens } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

function mintRateLimitModel(limit: MintRateLimitUpdated['limit']): MintRateLimitModel | undefined {
    return limit ? new MintRateLimitModel({ period: limit.period, max: limit.max }) : undefined
}

export function mintRateLimitUpdated(event: EventItem): MintRateLimitUpdated {
    if (!multiTokens.mintRateLimitUpdated.matrixV1040.is(event)) throw new UnsupportedEventError(event)

    const data = multiTokens.mintRateLimitUpdated.matrixV1040.decode(event)
    return {
        ...data,
        limit: normalizeOptionalMintRateLimit(data.limit),
    }
}

export function mintRateLimitChangeScheduled(event: EventItem): MintRateLimitChangeScheduled {
    if (!multiTokens.mintRateLimitChangeScheduled.matrixV1040.is(event)) throw new UnsupportedEventError(event)

    const data = multiTokens.mintRateLimitChangeScheduled.matrixV1040.decode(event)
    return {
        ...data,
        newLimit: normalizeOptionalMintRateLimit(data.newLimit),
        effectiveBlock: BigInt(data.effectiveBlock),
    }
}

export function mintRateLimitChangeCancelled(event: EventItem): MintRateLimitChangeCancelled {
    if (!multiTokens.mintRateLimitChangeCancelled.matrixV1040.is(event)) throw new UnsupportedEventError(event)
    return multiTokens.mintRateLimitChangeCancelled.matrixV1040.decode(event)
}

function eventRelations(item: EventItem, collectionId: bigint, tokenId?: bigint) {
    return {
        id: item.id,
        name: item.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collectionId.toString(),
        tokenId: tokenId === undefined ? null : `${collectionId}-${tokenId}`,
    }
}

export function mintRateLimitUpdatedEventModel(item: EventItem, data: MintRateLimitUpdated): EventModel {
    return new EventModel({
        ...eventRelations(item, data.collectionId, data.tokenId),
        data: new MultiTokensMintRateLimitUpdated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            limit: mintRateLimitModel(data.limit),
        }),
    })
}

export function mintRateLimitChangeScheduledEventModel(
    item: EventItem,
    data: MintRateLimitChangeScheduled
): EventModel {
    return new EventModel({
        ...eventRelations(item, data.collectionId, data.tokenId),
        data: new MultiTokensMintRateLimitChangeScheduled({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            newLimit: mintRateLimitModel(data.newLimit),
            effectiveBlock: data.effectiveBlock,
        }),
    })
}

export function mintRateLimitChangeCancelledEventModel(
    item: EventItem,
    data: MintRateLimitChangeCancelled
): EventModel {
    return new EventModel({
        ...eventRelations(item, data.collectionId, data.tokenId),
        data: new MultiTokensMintRateLimitChangeCancelled({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
        }),
    })
}
