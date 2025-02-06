import { UnsupportedEventError, throwError } from '../../common/errors'
import { events } from '../../types/generated'
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
    TokenRarity,
    TraitToken,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

import { computeTraits } from '../../jobs/compute-traits'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenDestroyed.name,
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
    const data = mappings.multiTokens.events.(item)
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

    const [
        listingSales,
        listingStatus,
        listingsMake,
        listingTake,
        royaltyCurrencies,
        traitTokens,
        tokenRairty,
        accountTokenEvents,
        attributes,
    ] = await Promise.all([
        ctx.store.find(ListingSale, {
            where: {
                listing: {
                    makeAssetId: {
                        id: token.id,
                    },
                },
            },
        }),
        ctx.store.find(ListingStatus, {
            where: {
                listing: {
                    makeAssetId: {
                        id: token.id,
                    },
                },
            },
        }),
        ctx.store.find(Listing, {
            where: {
                makeAssetId: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(Listing, {
            where: {
                takeAssetId: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(RoyaltyCurrency, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(TraitToken, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(TokenRarity, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(AccountTokenEvent, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(Attribute, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
    ])

    const updatedEvent = accountTokenEvents.map((event) => {
        event.token = null
        return event
    })

    await Promise.all([
        ctx.store.remove(listingSales),
        ctx.store.remove(listingStatus),
        ctx.store.remove(listingsMake),
        ctx.store.remove(listingTake),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(traitTokens),
        ctx.store.remove(tokenRairty),
        ctx.store.remove(attributes),
        ctx.store.save(updatedEvent),
    ])

    await ctx.store.remove(token)
    syncCollectionStats(data.collectionId.toString())
    computeTraits(data.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                caller: data.caller,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
