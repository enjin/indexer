import { In } from 'typeorm'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Attribute, Listing, ListingStatus, Token, TokenEvent } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { CollectionService } from '../../../services'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenDestroyedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, caller } = event.asEfinityV2
        return { collectionId, tokenId, caller }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleTokenDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

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

        const events = await ctx.store.find(TokenEvent, {
            where: {
                token: {
                    id: token.id,
                },
            },
        })

        const listings = await ctx.store.find(Listing, {
            where: {
                makeAssetId: {
                    id: token.id,
                },
            },
        })

        const listingStatus = await ctx.store.find(ListingStatus, {
            where: {
                listing: {
                    id: In(listings.map((l) => l.id)),
                },
            },
        })

        await ctx.store.remove(attributes)
        await ctx.store.remove(events)
        await ctx.store.remove(listingStatus)
        await ctx.store.remove(listings)
    }

    await ctx.store.remove(token)
    new CollectionService(ctx.store).sync(data.collectionId.toString())
}
