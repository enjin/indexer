import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import * as Sentry from '@sentry/node'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import {
    AccountTokenEvent,
    Attribute,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    MultiTokensTokenDestroyed,
    Token,
    TraitToken,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

import { computeTraits } from '../../../jobs/compute-traits'
import { syncCollectionStats } from '../../../jobs/collection-stats'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenDestroyedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.TokenDestroyed', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: u8aToHex(data.caller),
        }),
    })
}

export async function tokenDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenDestroyed', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    console.log(`Deleting token: ${data.collectionId}-${data.tokenId}`)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (!token) {
        Sentry.captureMessage(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data)
    }
    // TODO: We are removing all events that are related to this token.
    // We should only update the events that have relationship so it is null.
    // await ctx.store.delete(Event, { tokenId: token.id })
    token.bestListing = null
    token.recentListing = null

    await ctx.store.save(token)

    await Promise.all([
        ctx.store
            .getRepository(ListingSale)
            .query(
                'DELETE FROM listing_sale USING listing WHERE listing_sale.listing_id = listing.id AND listing.make_asset_id_id  = $1',
                [token.id]
            ),
        ctx.store
            .getRepository(ListingStatus)
            .query(
                'DELETE FROM listing_status USING listing WHERE listing_status.listing_id = listing.id AND listing.make_asset_id_id  = $1',
                [token.id]
            ),
        ctx.store.delete(Listing, {
            makeAssetId: {
                id: token.id,
            },
        }),
        ctx.store.delete(Listing, {
            takeAssetId: {
                id: token.id,
            },
        }),
        ctx.store.delete(TraitToken, { token: { id: token.id } }),
        ctx.store.delete(AccountTokenEvent, { token: { id: token.id } }),
        ctx.store.delete(Attribute, {
            token: {
                id: token.id,
            },
        }),
    ])

    await ctx.store.remove(token)
    syncCollectionStats(data.collectionId.toString())
    computeTraits(data.collectionId.toString())

    return getEvent(item, data)
}
