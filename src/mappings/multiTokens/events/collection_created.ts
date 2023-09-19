import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import {
    FuelTanksDispatchAndTouchCall,
    FuelTanksDispatchCall,
    MultiTokensCreateCollectionCall,
    MultiTokensForceCreateCollectionCall,
} from '../../../types/generated/calls'
import {
    Collection,
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
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty } from '../../../types/generated/v500'

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCallData(ctx: CommonContext, call: Call) {
    if (call.name === 'MultiTokens.force_create_collection') {
        const data = new MultiTokensForceCreateCollectionCall(ctx, call)
        if (data.isMatrixEnjinV603) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV603.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV603.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV603.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }
        throw new UnknownVersionError(data.constructor.name)
    } else if (call.name === 'MultiTokens.create_collection') {
        const data = new MultiTokensCreateCollectionCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV603.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV603.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV603.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }
        throw new UnknownVersionError(data.constructor.name)
    } else if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        let data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall
        if (call.name === 'FuelTanks.dispatch') {
            data = new FuelTanksDispatchCall(ctx, call)
        } else {
            data = new FuelTanksDispatchAndTouchCall(ctx, call)
        }

        if (data.isMatrixEnjinV603) {
            if (
                data.asMatrixEnjinV603.call.__kind === 'MultiTokens' &&
                data.asMatrixEnjinV603.call.value.__kind === 'create_collection'
            ) {
                const { descriptor } = data.asMatrixEnjinV603.call.value
                const { maxTokenCount, maxTokenSupply, forceSingleMint } = descriptor.policy.mint
                const royalty = descriptor.policy.market?.royalty
                const market = royalty ? await getMarket(ctx, royalty) : null
                const { explicitRoyaltyCurrencies } = descriptor

                return {
                    maxTokenCount,
                    maxTokenSupply,
                    forceSingleMint,
                    market,
                    explicitRoyaltyCurrencies,
                }
            }
            throw new UnknownVersionError(data.constructor.name)
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    throw new UnknownVersionError(call.name)
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function collectionCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    if (item.event.call.name === 'FuelTanks.dispatch_and_touch') return undefined

    const eventData = getEventData(ctx, item.event)
    const callData = await getCallData(ctx, item.event.call)
    if (!eventData || !callData) return undefined

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
        burnPolicy: null,
        attributePolicy: null,
        attributeCount: 0,
        totalDeposit: 0n, // TODO
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(collection)

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

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: eventData.collectionId,
            owner: account.id,
        }),
    })
}
