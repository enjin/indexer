import { EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { SnsEvent } from '~/util/sns'

function snsEvent(item: EventItem, body: Record<string, unknown>): SnsEvent {
    return {
        id: item.id,
        name: item.name,
        body: {
            ...body,
            extrinsic: item.extrinsic?.id,
        },
    }
}

export function mintRateLimitUpdated(item: EventItem, skipSave: boolean): EventHandlerResult {
    const data = mappings.multiTokens.events.mintRateLimitUpdated(item)
    const event = mappings.multiTokens.events.mintRateLimitUpdatedEventModel(item, data)
    if (skipSave) return event
    return [
        event,
        snsEvent(item, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            limit: data.limit,
        }),
    ]
}

export function mintRateLimitChangeScheduled(item: EventItem, skipSave: boolean): EventHandlerResult {
    const data = mappings.multiTokens.events.mintRateLimitChangeScheduled(item)
    const event = mappings.multiTokens.events.mintRateLimitChangeScheduledEventModel(item, data)
    if (skipSave) return event
    return [
        event,
        snsEvent(item, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            newLimit: data.newLimit,
            effectiveBlock: data.effectiveBlock,
        }),
    ]
}

export function mintRateLimitChangeCancelled(item: EventItem, skipSave: boolean): EventHandlerResult {
    const data = mappings.multiTokens.events.mintRateLimitChangeCancelled(item)
    const event = mappings.multiTokens.events.mintRateLimitChangeCancelledEventModel(item, data)
    if (skipSave) return event
    return [
        event,
        snsEvent(item, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
        }),
    ]
}
