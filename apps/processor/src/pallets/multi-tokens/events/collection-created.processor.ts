import {
    Collection,
    MintPolicy,
    TransferPolicy,
    Token,
    RoyaltyCurrency,
    CollectionSocials,
    CollectionFlags,
    CollectionStats,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import * as mappings from '../../index'
import { matrixUtility } from '../../../types/calls'
import { EventProcessor } from '../../event-processor.def'
import { CollectionCreated } from './collection-created.type'
import { multiTokens } from '../../../types/events'
import { collectionCreatedMap } from './collection-created.map'

// async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
//     const account = await getOrCreateAccount(ctx, royalty.beneficiary)
//     return new MarketPolicy({
//         royalty: new Royalty({
//             beneficiary: account.id,
//             percentage: royalty.percentage,
//         }),
//     })
// }

export interface CollectionCreatedProcessData {
    collection?: Collection
    callData?: any
    account?: any
}

export class CollectionCreatedProcessor extends EventProcessor<CollectionCreated, CollectionCreatedProcessData> {
    constructor() {
        super(multiTokens.collectionCreated.name, collectionCreatedMap)
    }

    protected decodeEventItem(item: EventItem): CollectionCreated {
        return collectionCreatedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionCreated): Promise<any> {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        return { collection }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionCreated
    ): Promise<CollectionCreatedProcessData | undefined> {
        // We need the call data to create a collection
        if (!item.call) return undefined

        // TODO: Refactor this later
        let callData = undefined
        if (item.call.name !== matrixUtility.batch.name) {
            callData = mappings.multiTokens.utils.anyCreateCollection(item.call)
        }
        if (callData === undefined || !('descriptor' in callData)) {
            callData = await mappings.multiTokens.utils.getCollectionAsCall(item.call, data.collectionId)
        }

        const account = await getOrCreateAccount(ctx, data.owner)

        return { callData, account }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionCreated,
        processData: CollectionCreatedProcessData
    ): Promise<CollectionCreatedProcessData> {
        // Handle skipSave case
        if (processData.collection) {
            processData.collection.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(processData.collection)
            return processData
        }

        const { callData, account } = processData

        const forceSingleMint =
            'forceSingleMint' in callData.descriptor.policy.mint
                ? callData.descriptor.policy.mint.forceSingleMint
                : callData.descriptor.policy.mint.forceCollapsingSupply

        const collection = new Collection({
            id: data.collectionId.toString(),
            collectionId: data.collectionId,
            owner: account,
            mintPolicy: new MintPolicy({
                maxTokenCount: callData.descriptor.policy.mint.maxTokenCount,
                maxTokenSupply: callData.descriptor.policy.mint.maxTokenSupply,
                forceSingleMint: forceSingleMint,
            }),
            // TODO: Fix this
            // marketPolicy: callData.descriptor.policy.market,
            transferPolicy: new TransferPolicy({
                isFrozen: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 0,
                salesCount: 0,
                supply: 0n,
                marketCap: 0n,
                volume: 0n,
            }),
            flags: new CollectionFlags({
                featured: false,
                hiddenForLegalReasons: false,
            }),
            verifiedAt: null,
            socials: new CollectionSocials({
                discord: null,
                twitter: null,
                instagram: null,
                medium: null,
                tiktok: null,
                website: null,
            }),
            hidden: false,
            burnPolicy: null,
            attributePolicy: null,
            attributeCount: 0,
            totalDeposit: 0n, // TODO
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(collection)

        const royaltyPromises = callData.descriptor.explicitRoyaltyCurrencies
            .map((currency: { collectionId: bigint; tokenId: bigint }) => {
                const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
                return new RoyaltyCurrency({
                    id: `${collection.id}-${tokenId}`,
                    collection,
                    token: new Token({ id: tokenId }),
                })
            })
            .map((rc: RoyaltyCurrency) => ctx.store.save(rc))

        await Promise.all(royaltyPromises)

        processData.collection = collection
        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionCreated,
        result: CollectionCreatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
