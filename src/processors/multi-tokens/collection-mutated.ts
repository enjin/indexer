import { throwError } from '../../utils/errors'
import { Collection, Event as EventModel, Listing, RoyaltyCurrency, Token } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount } from '../../utils/entities'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'

// async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
//     const account = await getOrCreateAccount(ctx, royalty.beneficiary)
//     return new MarketPolicy({
//         royalty: new Royalty({
//             beneficiary: account.id,
//             percentage: royalty.percentage,
//         }),
//     })
// }

export async function collectionMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionMutated(item)
    if (skipSave) return mappings.multiTokens.events.collectionMutatedEventModel(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return mappings.multiTokens.events.collectionMutatedEventModel(item, data)
    }

    if (data.mutation.owner) {
        collection.owner = await getOrCreateAccount(ctx, data.mutation.owner)
    }

    if (data.mutation.royalty.__kind === 'SomeMutation') {
        if (data.mutation.royalty.value === undefined) {
            collection.marketPolicy = null
        } else {
            const previousPercentage = collection.marketPolicy?.royalty.percentage || 0
            const currentPercentage =
                'percentage' in data.mutation.royalty.value ? data.mutation.royalty.value.percentage || 0 : 0

            if (currentPercentage > previousPercentage) {
                // royalty has increased
                // we need to update all active listings
                const listings = await ctx.store.find<Listing>(Listing, {
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
                        previousRoyalty: previousPercentage,
                        newRoyalty: currentPercentage,
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
            await ctx.store.remove(royaltyCurrencies)
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
            await ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return mappings.multiTokens.events.collectionMutatedEventModel(item, data)
}
