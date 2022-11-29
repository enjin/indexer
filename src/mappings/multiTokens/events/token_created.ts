import { SubstrateCall } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import {
    CapType,
    Collection,
    Token,
    TokenBehaviorType,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenCapSingleMint,
    TokenCapSupply,
    Royalty,
    Metadata,
} from '../../../model'
import { MultiTokensBatchMintCall, MultiTokensMintCall } from '../../../types/generated/calls'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { ChainContext } from '../../../types/generated/support'
import {
    DefaultMintParams_CreateToken,
    TokenCap,
    TokenCap_Supply,
    TokenMarketBehavior,
    TokenMarketBehavior_HasRoyalty,
} from '../../../types/generated/v6'
import { getOrCreateAccount } from '../../util/entities'
import { encodeId } from '../../../common/tools'
import { CollectionService } from '../../../services'
import { getMetadata } from '../../util/metadata'

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
    behavior: TokenMarketBehavior,
    ctx: ChainContext
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }
    const address = encodeId((behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    const account = await getOrCreateAccount(ctx as CommonHandlerContext, address)

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCallData(ctx: ChainContext, subcall: SubstrateCall, event: EventData): Promise<CallData> {
    if (subcall.name === 'MultiTokens.batch_mint') {
        const call = new MultiTokensBatchMintCall(ctx, subcall)

        if (call.isEfinityV2) {
            const { collectionId } = call.asEfinityV2
            const { recipients } = call.asEfinityV2
            const recipientCall = recipients.find(
                (r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
        } else if (call.isV6) {
            const { collectionId } = call.asV6
            const { recipients } = call.asV6
            const recipientCall = recipients.find(
                (r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
        } else if (call.isV5) {
            const { collectionId } = call.asV5
            const { recipients } = call.asV5
            const recipientCall = recipients.find(
                (r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
        } else if (call.isEfinityV3000) {
            const { collectionId } = call.asEfinityV3000
            const { recipients } = call.asEfinityV3000
            const recipientCall = recipients.find(
                (r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
            throw new UnknownVersionError(call.constructor.name)
        }
    }

    const call = new MultiTokensMintCall(ctx, subcall)

    if (call.isEfinityV2) {
        const { collectionId } = call.asEfinityV2
        const recipient = call.asEfinityV2.recipient.value as Uint8Array
        const params = call.asEfinityV2.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
    if (call.isV6) {
        const { collectionId } = call.asV6
        const recipient = call.asV6.recipient.value as Uint8Array
        const params = call.asV6.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
    if (call.isV5) {
        const { collectionId } = call.asV5
        const recipient = call.asV5.recipient.value as Uint8Array
        const params = call.asV5.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
    if (call.isEfinityV3000) {
        const { collectionId } = call.asEfinityV3000
        const recipient = call.asEfinityV3000.recipient.value as Uint8Array
        const params = call.asEfinityV3000.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(params.behavior, ctx) : null

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
    throw new UnknownVersionError(call.constructor.name)
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenCreatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, issuer, initialSupply } = event.asEfinityV2
        return { collectionId, tokenId, issuer, initialSupply }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function tokenCreated(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx)

    if (ctx.event.call) {
        const callData = await getCallData(ctx, ctx.event.call, eventData)

        if (!eventData || !callData) return

        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: eventData.collectionId.toString() },
            relations: {
                tokens: true,
                attributes: true,
            },
        })

        let metadata: Metadata | null | undefined = null
        const collectionUri = collection.attributes.find((e) => e.key === 'uri')
        if (
            collectionUri &&
            (collectionUri.value.includes('{id}.json') || collectionUri.value.includes('%7Bid%7D.json'))
        ) {
            metadata = await getMetadata(new Metadata(), collectionUri)
            // TODO: Far from ideal but we will do this only until we don't have the metadata processor
            if (metadata) {
                const otherTokens: Token[] = collection.tokens.map((e) => {
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
            minimumBalance: 0n, // TODO: Fixed for now
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata,
            listingForbidden: callData.listingForbidden,
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(Token, token as any)

        new CollectionService(ctx.store).sync(collection.id)
    }
}
