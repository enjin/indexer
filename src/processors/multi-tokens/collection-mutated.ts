import { UnsupportedEventError, throwError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketPolicy,
    MultiTokensCollectionMutated,
    Royalty,
    RoyaltyCurrency,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { DefaultRoyalty } from '../../types/generated/v500'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

export async function collectionMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionMutated(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return getEvent(item, data)
    }

    if (data.mutation.owner) {
        collection.owner = await getOrCreateAccount(ctx, data.mutation.owner)
    }

    if (data.mutation.royalty.__kind === 'SomeMutation') {
        if (data.mutation.royalty.value === undefined) {
            collection.marketPolicy = null
        } else {
            const currentRoyalty = collection.marketPolicy?.royalty.percentage || 0
            collection.marketPolicy = await getMarket(ctx, data.mutation.royalty.value)
            if (collection.marketPolicy.royalty.percentage > currentRoyalty) {
                // royalty has increased
                // we need to update all active listings
                const listings = await ctx.store.find(Listing, {
                    where: { makeAssetId: { collection: { id: collection.id } }, isActive: true },
                    relations: {
                        seller: true,
                    },
                })

                const mutatedListings = listings.map((listing) => {
                    listing.hasRoyaltyIncreased = true
                    return listing
                })

                await Sns.getInstance().send({
                    id: item.id,
                    name: 'Marketplace.RoyaltyIncreased',
                    body: {
                        collectionId: data.collectionId,
                        previousRoyalty: currentRoyalty,
                        newRoyalty: collection.marketPolicy.royalty.percentage,
                        sellers: listings.map((listing) => listing.seller.address),
                        listings: listings.map((listing) => listing.id),
                    },
                })

                await ctx.store.save(mutatedListings)
            }
        }
    }

    if (data.mutation.explicitRoyaltyCurrencies !== undefined) {
        const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
            where: { collection: { id: collection.id } },
        })

        if (data.mutation.explicitRoyaltyCurrencies.length === 0) {
            ctx.store.remove(royaltyCurrencies)
        } else {
            for (const currency of data.mutation.explicitRoyaltyCurrencies) {
                const rc = royaltyCurrencies.find(
                    (_rc) => _rc.id === `${collection.id}-${currency.collectionId}-${currency.tokenId}`
                )
                if (rc) {
                    royaltyCurrencies.splice(royaltyCurrencies.indexOf(rc), 1)

                    continue
                }

                const token = await ctx.store.findOne<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                if (!token) {
                    throwError(
                        `[CollectionMutated] We have not found token ${currency.collectionId}-${currency.tokenId}`,
                        'fatal'
                    )
                } else {
                    const royaltyCurrency = new RoyaltyCurrency({
                        id: `${collection.id}-${token.id}`,
                        collection,
                        token,
                    })

                    await ctx.store.insert(royaltyCurrency)
                }
            }
            ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return getEvent(item, data)
}
