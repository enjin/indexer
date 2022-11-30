import { SubstrateCall } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import {
    Collection,
    CollectionStats,
    Event,
    MultiTokensCollectionCreated,
    Extrinsic,
    MarketPolicy,
    MintPolicy,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../../model'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { AssetId, DefaultRoyalty } from '../../../types/generated/v6'

interface CallData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
    market: MarketPolicy | null
    explicitRoyaltyCurrencies: AssetId[]
}

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

async function getMarket(
    royalty: DefaultRoyalty,
    ctx: EventHandlerContext | CommonHandlerContext
): Promise<MarketPolicy> {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

async function getCallData(ctx: CommonHandlerContext, subcall: SubstrateCall): Promise<CallData> {
    const call = new MultiTokensCreateCollectionCall(ctx, subcall)

    if (call.isEfinityV2) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asEfinityV2.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
            explicitRoyaltyCurrencies: [{ collectionId: 0n, tokenId: 0n }],
        }
    }
    if (call.isV6) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV6.descriptor.policy.mint
        const royalty = call.asV6.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(royalty, ctx) : null
        const { explicitRoyaltyCurrencies } = call.asV6.descriptor

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market,
            explicitRoyaltyCurrencies,
        }
    }
    if (call.isV5) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV5.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
            explicitRoyaltyCurrencies: [{ collectionId: 0n, tokenId: 0n }],
        }
    }
    if (call.isEfinityV3000) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asEfinityV3000.descriptor.policy.mint
        const royalty = call.asEfinityV3000.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(royalty, ctx) : null
        const { explicitRoyaltyCurrencies } = call.asEfinityV3000.descriptor

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market,
            explicitRoyaltyCurrencies,
        }
    }
    throw new UnknownVersionError(call.constructor.name)
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionCreatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, owner } = event.asEfinityV2
        return { collectionId, owner }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function collectionCreated(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx)

    if (ctx.event.call) {
        const callData = await getCallData(ctx, ctx.event.call)

        if (!eventData || !callData) return

        const account = await getOrCreateAccount(ctx, eventData.owner)
        const collection = new Collection({
            id: eventData.collectionId.toString(),
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
                rank: 0,
                marketCap: 0n,
                volume: 0n,
            }),
            burnPolicy: null,
            attributePolicy: null,
            attributeCount: 0,
            totalDeposit: 0n, // TODO
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(Collection, collection as any)

        const extrinsic = await ctx.store.findOneBy(Extrinsic, { id: ctx.event.call.id })
        const event = new Event({
            id: ctx.event.id,
            extrinsic,
            collection,
            token: null,
            data: new MultiTokensCollectionCreated({
                collectionId: eventData.collectionId,
                owner: account.id,
            }),
        })
        await ctx.store.insert(Event, event as any)

        // eslint-disable-next-line no-restricted-syntax
        for (const currency of callData.explicitRoyaltyCurrencies) {
            // eslint-disable-next-line no-await-in-loop
            const token = await ctx.store.findOneOrFail<Token>(Token, {
                where: { id: `${currency.collectionId.toString()}-${currency.tokenId.toString()}` },
            })
            const royaltyCurrency = new RoyaltyCurrency({
                id: `${collection.id}-${token.id}`,
                collection,
                token,
            })
            // eslint-disable-next-line no-await-in-loop
            await ctx.store.insert(RoyaltyCurrency, royaltyCurrency as any)
        }
    }
}
