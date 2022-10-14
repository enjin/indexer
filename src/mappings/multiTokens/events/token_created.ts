import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import { CapType, Collection, Token } from '../../../model'
import { MultiTokensBatchMintCall, MultiTokensMintCall } from '../../../types/generated/calls'
import { EventHandlerContext } from '../../types/contexts'
import { ChainContext } from '../../../types/generated/support'
import { SubstrateCall } from '@subsquid/substrate-processor'
import { DefaultMintParams_CreateToken, TokenCap_Supply } from '../../../types/generated/v6'

interface CallData {
    recipient: Uint8Array
    collectionId: bigint
    tokenId: bigint
    initialSupply: bigint
    unitPrice: bigint
    capType: CapType | undefined
    capSupply: bigint | undefined
}

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    initialSupply: bigint
}

function getCallData(ctx: ChainContext, subcall: SubstrateCall, event: EventData): CallData {
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
                const capType = params.cap?.__kind as CapType

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    capType: capType,
                    capSupply: (params.cap as TokenCap_Supply)?.value,
                }
            }
        }else if (call.isV6) {
            const collectionId = call.asV6.collectionId
            const recipients = call.asV6.recipients
            const recipientCall = recipients.find(
                r => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken'
            );

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const capType = params.cap?.__kind as CapType

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    capType: capType,
                    capSupply: (params.cap as TokenCap_Supply)?.value,
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
                const capType = params.cap?.__kind as CapType

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    unitPrice: params.unitPrice,
                    capType: capType,
                    capSupply: (params.cap as TokenCap_Supply)?.value,
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
        const capType = params.cap?.__kind as CapType

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            capType: capType,
            capSupply: (params.cap as TokenCap_Supply)?.value,
        }
    } else if (call.isV6) {
        const collectionId = call.asV6.collectionId
        const recipient = call.asV6.recipient.value as Uint8Array
        const params = call.asV6.params as DefaultMintParams_CreateToken
        const capType = params.cap?.__kind as CapType

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            capType: capType,
            capSupply: (params.cap as TokenCap_Supply)?.value,
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

export async function handleTokenCreated(ctx: EventHandlerContext) {
    console.log('MultiTokens.TokenCreated')
    const eventData = getEventData(ctx as EventHandlerContext)

    if (ctx.event.call) {
        const callData = getCallData(ctx, ctx.event.call, eventData)

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
            capType: callData.capType,
            capSupply: callData.capSupply,
            isFrozen: false,
            minimumBalance: 0n, // TODO: Fixed for now
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection: collection,
            // accounts: [],
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert<Token>(token)
    }
}
