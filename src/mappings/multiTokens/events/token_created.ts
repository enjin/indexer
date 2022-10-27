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
    TokenCapSupply, Royalty,
} from '../../../model'
import { MultiTokensBatchMintCall, MultiTokensMintCall } from '../../../types/generated/calls'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { ChainContext } from '../../../types/generated/support'
import { SubstrateCall } from '@subsquid/substrate-processor'
import {
    DefaultMintParams_CreateToken,
    TokenCap,
    TokenCap_Supply,
    TokenMarketBehavior,
    TokenMarketBehavior_HasRoyalty
} from '../../../types/generated/v6'
import { getOrCreateAccount } from '../../util/entities'
import { encodeId } from '../../../common/tools'

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

async function getCallData(ctx: ChainContext, subcall: SubstrateCall, event: EventData): Promise<CallData> {
    if (subcall.name === 'MultiTokens.batch_mint') {
        const call = new MultiTokensBatchMintCall(ctx, subcall);

        if (call.isEfinityV2) {
            const collectionId = call.asEfinityV2.collectionId
            const recipients = call.asEfinityV2.recipients
            const recipientCall = recipients.find(
                r => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            );

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
                    cap: cap,
                    behavior: behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (call.isV6) {
            const collectionId = call.asV6.collectionId
            const recipients = call.asV6.recipients
            const recipientCall = recipients.find(
                r => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            );

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
                    cap: cap,
                    behavior: behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (call.isV5) {
            const collectionId = call.asV5.collectionId
            const recipients = call.asV5.recipients
            const recipientCall = recipients.find(
                r => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            );

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
                    cap: cap,
                    behavior: behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (call.isEfinityV3000) {
            const collectionId = call.asEfinityV3000.collectionId
            const recipients = call.asEfinityV3000.recipients
            const recipientCall = recipients.find(
                r => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            );

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
                    cap: cap,
                    behavior: behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else {
            throw new UnknownVersionError(call.constructor.name)
        }
    }

    const call = new MultiTokensMintCall(ctx, subcall)

    if (call.isEfinityV2) {
        const collectionId = call.asEfinityV2.collectionId
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
            cap: cap,
            behavior: behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    } else if (call.isV6) {
        const collectionId = call.asV6.collectionId
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
            cap: cap,
            behavior: behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    } else if (call.isV5) {
        const collectionId = call.asV5.collectionId
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
            cap: cap,
            behavior: behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    } else if (call.isEfinityV3000) {
        const collectionId = call.asEfinityV3000.collectionId
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
            cap: cap,
            behavior: behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenCreatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, issuer, initialSupply } = event.asEfinityV2
        console.log(
            `Block: ${ctx.block.height}, event: ${ctx.event.name}, collectionId: ${collectionId}, tokenId: ${tokenId}`
        )
        return { collectionId, tokenId, issuer, initialSupply }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getCapType(cap: TokenCap): TokenCapSupply | TokenCapSingleMint {
    if (cap.__kind === CapType.Supply.toString()) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: (cap as TokenCap_Supply).value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint
    });
}

async function getBehavior(behavior: TokenMarketBehavior, ctx: ChainContext): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }
    const address = encodeId((behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    const account = await getOrCreateAccount((ctx as CommonHandlerContext), address)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        })
    })

}

export async function handleTokenCreated(ctx: EventHandlerContext) {
    console.log('MultiTokens.TokenCreated')
    const eventData = getEventData(ctx)

    if (ctx.event.call) {
        const callData = await getCallData(ctx, ctx.event.call, eventData)

        if (!eventData || !callData) return

        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: eventData.collectionId.toString() },
            relations: {
                owner: true,
            },
        })

        collection.tokenCount += 1
        await ctx.store.save(collection)

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: eventData.initialSupply,
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: false,
            minimumBalance: 0n, // TODO: Fixed for now
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection: collection,
            listingForbidden: callData.listingForbidden,
            // accounts: [],
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert<Token>(token)
    }
}
