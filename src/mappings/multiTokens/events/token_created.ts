import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import {
    CapType,
    Collection,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MultiTokensTokenCreated,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenCapSingleMint,
    TokenCapSupply,
} from '../../../model'
import { MultiTokensBatchMintCall, MultiTokensMintCall } from '../../../types/generated/calls'
import { Call, Event } from '../../../types/generated/support'
import {
    DefaultMintParams_CreateToken,
    TokenCap,
    TokenCap_Supply,
    TokenMarketBehavior,
    TokenMarketBehavior_HasRoyalty,
} from '../../../types/generated/v3012'
import { getMetadata } from '../../util/metadata'
import { CommonContext } from '../../types/contexts'
import { CollectionService } from '../../../services'
import { getOrCreateAccount } from '../../util/entities'
import { computeTraits } from '../../../jobs/compute-traits'

interface CallData {
    recipient: Uint8Array
    collectionId: bigint
    tokenId: bigint
    initialSupply: bigint
    unitPrice: bigint
    cap: TokenCapSupply | TokenCapSingleMint | null
    behavior: TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty | null
    listingForbidden: boolean
}

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    initialSupply: bigint
}

function getCapType(cap: TokenCap): TokenCapSupply | TokenCapSingleMint {
    if (cap.__kind === CapType.Supply.toString()) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: (cap as TokenCap_Supply).value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
    })
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, (behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCallData(ctx: CommonContext, call: Call, event: EventData): Promise<CallData> {
    if (call.name === 'MultiTokens.batch_mint') {
        const data = new MultiTokensBatchMintCall(ctx, call)

        if (data.isEfinityV2) {
            const { collectionId } = data.asEfinityV2
            const { recipients } = data.asEfinityV2
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (data.isEfinityV3000) {
            const { collectionId } = data.asEfinityV3000
            const { recipients } = data.asEfinityV3000
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (data.isEfinityV3012) {
            const { collectionId } = data.asEfinityV3012
            const { recipients } = data.asEfinityV3012
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else {
            throw new UnknownVersionError(data.constructor.name)
        }
    }

    const data = new MultiTokensMintCall(ctx, call)

    if (data.isEfinityV2) {
        const { collectionId } = data.asEfinityV2
        const recipient = data.asEfinityV2.recipient.value as Uint8Array
        const params = data.asEfinityV2.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    if (data.isEfinityV3000) {
        const { collectionId } = data.asEfinityV3000
        const recipient = data.asEfinityV3000.recipient.value as Uint8Array
        const params = data.asEfinityV3000.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    if (data.isEfinityV3012) {
        const { collectionId } = data.asEfinityV3012
        const recipient = data.asEfinityV3012.recipient.value as Uint8Array
        const params = data.asEfinityV3012.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenCreatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asEfinityV2
        return { collectionId, tokenId, issuer, initialSupply }
    }
    if (data.isEfinityV3012) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asEfinityV3012
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), initialSupply }
    }
    throw new UnknownVersionError(data.constructor.name)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function tokenCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (item.event.call) {
        const callData = await getCallData(ctx, item.event.call, eventData)
        if (!eventData || !callData) return undefined

        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: eventData.collectionId.toString() },
            relations: {
                attributes: true,
            },
        })

        // TODO: Far from ideal but we will do this only until we don't have the metadata processor
        let metadata: Metadata | null | undefined = null
        const collectionUri = collection.attributes.find((e) => e.key === 'uri')
        if (collectionUri && (collectionUri.value.includes('{id}.json') || collectionUri.value.includes('%7Bid%7D.json'))) {
            metadata = await getMetadata(new Metadata(), collectionUri)
            if (metadata) {
                const collectionWithTokens = await ctx.store.findOneOrFail<Collection>(Collection, {
                    where: { id: eventData.collectionId.toString() },
                    relations: {
                        tokens: true,
                    },
                })

                const otherTokens: Token[] = collectionWithTokens.tokens.map((e) => {
                    e.metadata = metadata
                    return e
                })

                if (otherTokens.length > 0) {
                    await ctx.store.save(otherTokens)
                }
            }
        }

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: false,
            minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / callData.unitPrice))),
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: callData.listingForbidden,
            createdAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Token, token as any)
        new CollectionService(ctx.store).sync(collection.id)
        computeTraits(collection.id)

        return new EventModel({
            id: item.event.id,
            extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
            collectionId: eventData.collectionId.toString(),
            tokenId: token.id,
            data: new MultiTokensTokenCreated({
                collectionId: eventData.collectionId,
                tokenId: eventData.tokenId,
                issuer: u8aToHex(eventData.issuer),
                initialSupply: eventData.initialSupply,
            }),
        })
    }

    return undefined
}
