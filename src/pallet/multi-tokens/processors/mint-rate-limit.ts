import { Block, CommonContext, EventItem } from '~/contexts'
import { Collection, Token } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { SnsEvent } from '~/util/sns'
import { toMintRateLimitStateModel } from './mint-rate-limit-state'

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

async function updateMintRateLimit(
    ctx: CommonContext,
    block: Block,
    collectionId: bigint,
    tokenId?: bigint
): Promise<void> {
    if (tokenId === undefined) {
        const [collection, chainCollection] = await Promise.all([
            ctx.store.findOneBy(Collection, { id: collectionId.toString() }),
            mappings.multiTokens.storage.collections(block, { collectionId }),
        ])
        if (!collection || !chainCollection) {
            ctx.log.warn(`[MintRateLimit] Collection ${collectionId} was absent`)
            return
        }

        collection.mintRateLimit = toMintRateLimitStateModel(chainCollection.mintRateLimit)
        await ctx.store.save(collection)
        return
    }

    const id = `${collectionId}-${tokenId}`
    const [token, chainToken] = await Promise.all([
        ctx.store.findOneBy(Token, { id }),
        mappings.multiTokens.storage.tokens(block, { collectionId, tokenId }),
    ])
    if (!token || !chainToken) {
        ctx.log.warn(`[MintRateLimit] Token ${id} was absent`)
        return
    }

    token.mintRateLimit = toMintRateLimitStateModel(chainToken.mintRateLimit)
    await ctx.store.save(token)
}

export async function mintRateLimitUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.mintRateLimitUpdated(item)
    const event = mappings.multiTokens.events.mintRateLimitUpdatedEventModel(item, data)
    if (skipSave) return event
    await updateMintRateLimit(ctx, block, data.collectionId, data.tokenId)
    return [
        event,
        snsEvent(item, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            limit: data.limit,
        }),
    ]
}

export async function mintRateLimitChangeScheduled(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.mintRateLimitChangeScheduled(item)
    const event = mappings.multiTokens.events.mintRateLimitChangeScheduledEventModel(item, data)
    if (skipSave) return event
    await updateMintRateLimit(ctx, block, data.collectionId, data.tokenId)
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

export async function mintRateLimitChangeCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.mintRateLimitChangeCancelled(item)
    const event = mappings.multiTokens.events.mintRateLimitChangeCancelledEventModel(item, data)
    if (skipSave) return event
    await updateMintRateLimit(ctx, block, data.collectionId, data.tokenId)
    return [
        event,
        snsEvent(item, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
        }),
    ]
}
