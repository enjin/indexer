import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    AccountTokenEvent,
    Attribute,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    MultiTokensTokenDestroyed,
    RoyaltyCurrency,
    Token,
    TraitToken,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

import { computeTraits } from '../../../jobs/compute-traits'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenDestroyed.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, caller } = events.multiTokens.tokenDestroyed.matrixEnjinV603.decode(event)
        return { collectionId, tokenId, caller }
    }

    throw new UnknownVersionError(events.multiTokens.tokenDestroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: data.caller,
        }),
    })
}

export async function tokenDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const token = await ctx.store.findOneBy<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })

    if (!token) {
        throwError(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data)
    }

    token.bestListing = null
    token.recentListing = null
    token.lastSale = null

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
        ctx.store.delete(RoyaltyCurrency, { token: { id: token.id } }),
        ctx.store.delete(TraitToken, { token: { id: token.id } }),
        ctx.store.update(AccountTokenEvent, { token: { id: token.id } }, { token: null }),
        ctx.store.delete(Attribute, { token: { id: token.id } }),
    ])

    await ctx.store.remove(token)
    syncCollectionStats(data.collectionId.toString())
    computeTraits(data.collectionId.toString())

    return getEvent(item, data)
}
