import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Attribute, Event as EventModel, Token } from '../../../model'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

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
    if (!data) return

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

        // const events = await ctx.store.find(TokenEvent, {
        //     where: {
        //         token: {
        //             id: token.id,
        //         },
        //     },
        // })

        // await ctx.store
        //     .getRepository(ListingStatus)
        //     .query(
        //         'DELETE FROM listing_status USING listing WHERE listing_status.listing_id = listing.id AND listing.make_asset_id_id  = $1',
        //         [token.id]
        //     )
        //
        // await ctx.store.remove(Listing, {
        //     makeAssetId: {
        //         id: token.id,
        //     },
        // })

        await ctx.store.remove(attributes)
        // await ctx.store.remove(events)
    }

    await ctx.store.remove(token)
    // new CollectionService(ctx.store).sync(data.collectionId.toString())
}
