import { throwFatalError } from '../../../util/errors'
import {
    Collection,
    Event as EventModel,
    Listing,
    MarketPolicy,
    RoyaltyBeneficiary,
    RoyaltyCurrency,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { DefaultRoyalty as DefaultRoyalty1020 } from '../../../type/matrixV1020'
import { DefaultRoyalty as DefaultRoyalty500 } from '../../../type/matrixV500'

type DefaultRoyalty = DefaultRoyalty500 | DefaultRoyalty1020

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const beneficiaries =
        'beneficiaries' in royalty
            ? royalty.beneficiaries
            : [
                  {
                      beneficiary: royalty.beneficiary,
                      percentage: royalty.percentage,
                  },
              ]

    const beneficiariesWithAccount = await Promise.all(
        beneficiaries.map(async (v) => {
            return new RoyaltyBeneficiary({
                accountId: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new MarketPolicy({
        beneficiaries: beneficiariesWithAccount,
    })
}

export async function collectionMutated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionMutated(item)
    if (skipSave) return mappings.multiTokens.events.collectionMutatedEventModel(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwFatalError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`)
        return mappings.multiTokens.events.collectionMutatedEventModel(item, data)
    }

    if (data.mutation.royalty.__kind === 'SomeMutation') {
        if (data.mutation.royalty.value === undefined) {
            collection.marketPolicy = null
        } else {
            collection.marketPolicy = await getMarket(ctx, data.mutation.royalty.value)

            let hasChangedRoyalty = false
            const percentage = {
                old: 0,
                new: 0,
            }
            const newBeneficiaries =
                'beneficiaries' in data.mutation.royalty.value ? data.mutation.royalty.value.beneficiaries : []
            const previousBeneficiaries = collection.marketPolicy.beneficiaries || []

            if (newBeneficiaries.length !== previousBeneficiaries.length) {
                hasChangedRoyalty = true
            } else {
                for (const newB of newBeneficiaries) {
                    const prevB = previousBeneficiaries.find((b) => b.accountId === newB.beneficiary)
                    if (!prevB || prevB.percentage !== newB.percentage) {
                        hasChangedRoyalty = true
                        percentage.old = prevB?.percentage || 0
                        percentage.new = newB.percentage
                        break
                    }
                }
            }

            if (hasChangedRoyalty) {
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
                        previousRoyalty: percentage.old,
                        newRoyalty: percentage.new,
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
                    throwFatalError(
                        `[CollectionMutated] We have not found token ${currency.collectionId}-${currency.tokenId}`
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
