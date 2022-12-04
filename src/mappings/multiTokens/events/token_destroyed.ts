import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Attribute, Event as EventModel, Listing, ListingStatus, MultiTokensTokenDestroyed, Token } from '../../../model'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'
import { u8aToHex } from '@polkadot/util'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensTokenDestroyedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, caller } = data.asEfinityV2
        return { collectionId, tokenId, caller }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function tokenDestroyed(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenDestroyed', { event: { args: true; extrinsic: true; call: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (token) {
        const attributes = await ctx.store.find(Attribute, {
            where: {
                token: {
                    id: token.id,
                },
            },
        })

        // await ctx.store
        //     .getRepository(ListingStatus)
        //     .query(
        //         'DELETE FROM listing_status USING listing WHERE listing_status.listing_id = listing.id AND listing.make_asset_id_id  = $1',
        //         [token.id]
        //     )
        //

        // TODO: Refactor this
        const makeListings = await ctx.store.findBy(Listing, {
            makeAssetId: {
                id: token.id,
            },
        })
        const takeListings = await ctx.store.findBy(Listing, {
            takeAssetId: {
                id: token.id,
            },
        })
        const listings = [...makeListings, ...takeListings]
        const listingStatus = []
        for (const listing of listings) {
            const status = await ctx.store.findBy(ListingStatus, {
                listing: {
                    id: listing.id,
                },
            })
            if (status) {
                listingStatus.push(...status)
            }
        }

        await ctx.store.remove(listingStatus)
        await ctx.store.remove(listings)
        await ctx.store.remove(attributes)
    }

    await ctx.store.remove(token)

    return new EventModel({
        id: item.event.id,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: u8aToHex(data.caller),
        }),
    })
}
