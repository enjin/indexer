import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { events, calls, storage } from '../../../types/generated'
import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MintPolicy,
    MultiTokensCollectionCreated,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { DefaultRoyalty as DefaultRoyalty1032 } from '../../../types/generated/enjinV1032'
import { DefaultRoyalty as DefaultRoyalty1050 } from '../../../types/generated/v1050'
import { AssetId } from '../../../types/generated/enjinV1032'

type DefaultRoyalty = DefaultRoyalty1032 | DefaultRoyalty1050

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

async function getCallData(ctx: CommonContext, call: CallItem) {
    if (
        call.name === 'MatrixUtility.batch' ||
        call.name === 'Utility.batch' ||
        call.name === 'Utility.batch_all' ||
        call.name === 'FuelTanks.dispatch_and_touch' ||
        call.name === 'FuelTanks.dispatch'
    ) {
        return undefined
    }

    if (call.name === 'MultiTokens.force_create_collection') {
        if (calls.multiTokens.forceCreateCollection.enjinV1032.is(call)) {
            const data = calls.multiTokens.forceCreateCollection.enjinV1032.decode(call)
            const { maxTokenCount, maxTokenSupply, forceCollapsingSupply: forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.forceCreateCollection.enjinV100.is(call)) {
            const data = calls.multiTokens.forceCreateCollection.enjinV100.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.forceCreateCollection.v1030.is(call)) {
            const data = calls.multiTokens.forceCreateCollection.v1030.decode(call)
            const { maxTokenCount, maxTokenSupply, forceCollapsingSupply: forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.forceCreateCollection.v100.is(call)) {
            const data = calls.multiTokens.forceCreateCollection.v100.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        throw new UnknownVersionError(calls.multiTokens.forceCreateCollection.name)
    }

    if (call.name === 'MultiTokens.create_collection') {
        if (calls.multiTokens.createCollection.enjinV1032.is(call)) {
            const data = calls.multiTokens.createCollection.enjinV1032.decode(call)
            const { maxTokenCount, maxTokenSupply, forceCollapsingSupply: forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.createCollection.enjinV100.is(call)) {
            const data = calls.multiTokens.createCollection.enjinV100.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.createCollection.v1050.is(call)) {
            const data = calls.multiTokens.createCollection.v1050.decode(call)
            const { maxTokenCount, maxTokenSupply, forceCollapsingSupply: forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.createCollection.v100.is(call)) {
            const data = calls.multiTokens.createCollection.v100.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        throw new UnknownVersionError(calls.multiTokens.createCollection.name)
    }

    if (call.name === 'MultiTokens.force_create_ethereum_collection') {
        if (calls.multiTokens.forceCreateEthereumCollection.enjinV1032.is(call)) {
            const data = calls.multiTokens.forceCreateEthereumCollection.enjinV1032.decode(call)
            const { maxTokenCount, maxTokenSupply, forceCollapsingSupply: forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.forceCreateEthereumCollection.enjinV1021.is(call)) {
            const data = calls.multiTokens.forceCreateEthereumCollection.enjinV1021.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (calls.multiTokens.forceCreateEthereumCollection.enjinV120.is(call)) {
            const data = calls.multiTokens.forceCreateEthereumCollection.enjinV120.decode(call)
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.descriptor.policy.mint
            const royalty = data.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        throw new UnknownVersionError(calls.multiTokens.forceCreateEthereumCollection.name)
    }

    throw new UnsupportedCallError(call.name)
}

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionCreated.enjinV100.is(event)) {
        return events.multiTokens.collectionCreated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionCreated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: data.owner,
        }),
    })
}

async function getCollectionId(ctx: CommonContext, block: BlockHeader, collectionId: bigint) {
    if (storage.multiTokens.collections.enjinV1032.is(block)) {
        const data = await storage.multiTokens.collections.enjinV1032.get(block, collectionId)
        const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies

        const assets = currencies?.map(([assetId, _]) => assetId)

        if (data) {
            const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
            return {
                maxTokenCount: data.policy.mint.maxTokenCount,
                maxTokenSupply: data.policy.mint.maxTokenSupply,
                forceSingleMint: data.policy.mint.forceCollapsingSupply,
                market,
                explicitRoyaltyCurrencies: assets ?? [], // Check
            }
        }
    }

    if (storage.multiTokens.collections.enjinV100.is(block)) {
        const data = await storage.multiTokens.collections.enjinV100.get(block, collectionId)
        const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies

        const assets = currencies?.map(([assetId, _]) => assetId)

        if (data) {
            const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
            return {
                maxTokenCount: data.policy.mint.maxTokenCount,
                maxTokenSupply: data.policy.mint.maxTokenSupply,
                forceSingleMint: data.policy.mint.forceSingleMint,
                market,
                explicitRoyaltyCurrencies: assets ?? [], // Check
            }
        }
    }

    if (storage.multiTokens.collections.v1030.is(block)) {
        const data = await storage.multiTokens.collections.v1030.get(block, collectionId)
        const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies
        const assets = currencies?.map(([assetId, _]) => assetId)

        if (data) {
            const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
            return {
                maxTokenCount: data.policy.mint.maxTokenCount,
                maxTokenSupply: data.policy.mint.maxTokenSupply,
                forceSingleMint: data.policy.mint.forceCollapsingSupply,
                market,
                explicitRoyaltyCurrencies: assets ?? [], // Check
            }
        }
    }

    if (storage.multiTokens.collections.v100.is(block)) {
        const data = await storage.multiTokens.collections.v100.get(block, collectionId)
        const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies
        const assets = currencies?.map(([assetId, _]) => assetId)

        if (data) {
            const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
            return {
                maxTokenCount: data.policy.mint.maxTokenCount,
                maxTokenSupply: data.policy.mint.maxTokenSupply,
                forceSingleMint: data.policy.mint.forceSingleMint,
                market,
                explicitRoyaltyCurrencies: assets ?? [], // Check
            }
        }
    }

    return {
        maxTokenCount: 0n,
        maxTokenSupply: 0n,
        forceSingleMint: false,
        market: null,
        explicitRoyaltyCurrencies: [],
    }
}

export async function collectionCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (!item.call) return undefined

    const eventData = getEventData(item)
    if (!eventData) return undefined

    if (skipSave) {
        const collection = await ctx.store.findOne(Collection, { where: { id: eventData.collectionId.toString() } })

        if (collection) {
            collection.createdAt = new Date(block.timestamp ?? 0)
            ctx.store.save(collection)
        }

        return getEvent(item, eventData)
    }

    let callData = await getCallData(ctx, item.call)

    if (callData === undefined) {
        callData = await getCollectionId(ctx, block, eventData.collectionId)
    }

    const account = await getOrCreateAccount(ctx, eventData.owner)
    const collection = new Collection({
        id: eventData.collectionId.toString(),
        collectionId: eventData.collectionId,
        owner: account,
        mintPolicy: new MintPolicy({
            maxTokenCount: callData.maxTokenCount,
            maxTokenSupply: callData.maxTokenSupply,
            forceSingleMint: callData.forceSingleMint,
        }),
        marketPolicy: callData.market,
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

    const royaltyPromises = callData.explicitRoyaltyCurrencies
        .map((currency: any) => {
            const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
            return new RoyaltyCurrency({
                id: `${collection.id}-${tokenId}`,
                collection,
                token: new Token({ id: tokenId }),
            })
        })
        .map((rc: any) => ctx.store.save(rc))

    await Promise.all(royaltyPromises)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: eventData.collectionId,
                owner: eventData.owner,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
