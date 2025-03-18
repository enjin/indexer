import { UnsupportedEventError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
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
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { DefaultRoyalty as DefaultRoyalty1020 } from '../../../types/generated/v1020'
import { DefaultRoyalty as DefaultRoyalty500 } from '../../../types/generated/v500'

type DefaultRoyalty = DefaultRoyalty500 | DefaultRoyalty1020

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
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
            return new Royalty({
                beneficiary: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new MarketPolicy({
        royalty: beneficiariesWithAccount[0],
        beneficiaries: beneficiariesWithAccount,
    })
}

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.collectionMutated.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionMutated.matrixEnjinV603.decode(event)
    }

    if (events.multiTokens.collectionMutated.v1020.is(event)) {
        return events.multiTokens.collectionMutated.v1020.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionMutated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: null,
        data: new MultiTokensCollectionMutated({
            collectionId: data.collectionId,
        }),
    })
}

export async function collectionMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)
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
            const currentRoyalty = collection.marketPolicy?.royalty?.percentage || 0
            collection.marketPolicy = await getMarket(ctx, data.mutation.royalty.value)

            if (collection.marketPolicy.royalty?.percentage ?? 0 > currentRoyalty) {
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
                        newRoyalty: collection.marketPolicy.royalty?.percentage,
                        sellers: listings.map((listing) => listing.seller.address),
                        listings: listings.map((listing) => listing.id),
                        hash: item.extrinsic?.hash,
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
