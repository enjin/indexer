import { throwFatalError } from '../../../utils/errors'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MultiTokensCollectionMutated,
    RoyaltyCurrency,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { CollectionMutated } from './collection-mutated.type'
import { multiTokens } from '../../../types/events'
import { collectionMutated } from './collection-mutated.map'

// async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
//     const account = await getOrCreateAccount(ctx, royalty.beneficiary)
//     return new MarketPolicy({
//         royalty: new Royalty({
//             beneficiary: account.id,
//             percentage: royalty.percentage,
//         }),
//     })
// }

interface CollectionMutatedProcessData {
    collection: Collection
    listings?: Listing[]
    royaltyCurrencies?: RoyaltyCurrency[]
    previousPercentage?: number
    currentPercentage?: number
}

export class CollectionMutatedProcessor extends EventProcessor<CollectionMutated> {
    constructor() {
        super(multiTokens.collectionMutated.name)
    }

    protected decodeEventItem(item: EventItem): CollectionMutated {
        return collectionMutated(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionMutated): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionMutated
    ): Promise<CollectionMutatedProcessData | undefined> {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwFatalError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`)
            return undefined
        }

        return { collection }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionMutated,
        processData: CollectionMutatedProcessData
    ): Promise<CollectionMutatedProcessData> {
        const { collection } = processData
        const result: CollectionMutatedProcessData = { collection }

        if (data.mutation.owner) {
            collection.owner = await getOrCreateAccount(ctx, data.mutation.owner)
        }

        if (data.mutation.royalty.__kind === 'SomeMutation') {
            if (data.mutation.royalty.value === undefined) {
                collection.marketPolicy = null
            } else {
                const previousPercentage = collection.marketPolicy?.royalty?.percentage || 0
                const currentPercentage =
                    'percentage' in data.mutation.royalty.value ? data.mutation.royalty.value.percentage || 0 : 0

                result.previousPercentage = previousPercentage
                result.currentPercentage = currentPercentage

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

                    await ctx.store.save(mutatedListings)
                    result.listings = listings
                }
            }
        }

        if (data.mutation.explicitRoyaltyCurrencies !== undefined) {
            const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
                where: { collection: { id: collection.id } },
            })

            result.royaltyCurrencies = royaltyCurrencies

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

        return result
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionMutated,
        result: CollectionMutatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(item: EventItem, data: CollectionMutated, result: CollectionMutatedProcessData): any {
        const notificationBody: any = {
            collectionId: data.collectionId,
            extrinsic: item.extrinsic?.id,
        }

        // Add royalty increase notification data if applicable
        if (result.listings && result.previousPercentage !== undefined && result.currentPercentage !== undefined) {
            notificationBody.previousRoyalty = result.previousPercentage
            notificationBody.newRoyalty = result.currentPercentage
            notificationBody.sellers = result.listings.map((listing) => listing.seller.address)
            notificationBody.listings = result.listings.map((listing) => listing.id)
        }

        return notificationBody
    }

    protected getEventModel(
        item: EventItem,
        data: CollectionMutated,
        result?: CollectionMutatedProcessData
    ): EventResult {
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
}
