import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import {
    FuelTanksDispatchAndTouchCall,
    FuelTanksDispatchCall,
    MultiTokensCreateCollectionCall,
    MultiTokensForceCreateCollectionCall,
} from '../../../types/generated/calls'
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

        if (
            data.isMatrixEnjinV603 &&
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

    throw new UnsupportedCallError(call.name)
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(event.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; call: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: u8aToHex(data.owner),
        }),
    })
}

export async function collectionCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; call: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    if (skipSave) {
        ctx.store.update(Collection, { id: eventData.collectionId.toString() }, { createdAt: new Date(block.timestamp) })
        return getEvent(item, eventData)
    }
    const [callData, account] = await Promise.all([getCallData(ctx, item.event.call), getOrCreateAccount(ctx, eventData.owner)])

    if (!callData) return undefined
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
            verified: false,
        }),
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
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(collection)

    const royaltyPromises = callData.explicitRoyaltyCurrencies
        .map((currency) => {
            const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
            return new RoyaltyCurrency({
                id: `${collection.id}-${tokenId}`,
                collection,
                token: new Token({ id: tokenId }),
            })
        })
        .map((rc) => ctx.store.insert(RoyaltyCurrency, rc as any))

    await Promise.all(royaltyPromises)

    return getEvent(item, eventData)
}
