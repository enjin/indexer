import { throwFatalError } from '../../../util/errors'
import {
    Attribute,
    Event as EventModel,
    Listing,
    ListingSale,
    ListingStatus,
    RoyaltyCurrency,
    Token,
    TokenRarity,
    TraitToken,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function tokenDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)

    const token = await ctx.store.findOneBy<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })

    if (!token) {
        throwFatalError(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)
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
        tokenRarity,
        attributes,
    ] = await Promise.all([
        ctx.store.find(ListingSale, {
            where: [
                {
                    listing: {
                        makeAssetId: {
                            id: token.id,
                        },
                    },
                },
                {
                    listing: {
                        takeAssetId: {
                            id: token.id,
                        },
                    },
                },
            ],
        }),
        ctx.store.find(ListingStatus, {
            where: [
                {
                    listing: {
                        makeAssetId: {
                            id: token.id,
                        },
                    },
                },
                {
                    listing: {
                        takeAssetId: {
                            id: token.id,
                        },
                    },
                },
            ],
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
        ctx.store.find(Attribute, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
    ])

    await Promise.all([
        ctx.store.remove(listingSales),
        ctx.store.remove(listingStatus),
        ctx.store.remove(listingsMake),
        ctx.store.remove(listingTake),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(traitTokens),
        ctx.store.remove(tokenRarity),
        ctx.store.remove(attributes),
    ])

    await ctx.store.remove(token)

    QueueUtils.dispatchComputeStats(data.collectionId.toString())
    QueueUtils.dispatchComputeTraits(data.collectionId.toString())

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

    return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)
}
