import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import { CapType, Collection, Token } from '../../../model'
import { MultiTokensMintCall } from '../../../types/generated/calls'
import { DefaultMintParams_CreateToken, TokenCap_Supply } from '../../../types/generated/v2'
import { CallHandlerContext, CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { ChainContext } from '../../../types/generated/support'
import { SubstrateCall } from '@subsquid/substrate-processor'

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

function getCallData(ctx: ChainContext, subcall: SubstrateCall): CallData {
    const call = new MultiTokensMintCall(ctx, subcall)

    if (call.isV2) {
        const collectionId = call.asV2.collectionId
        const recipient = call.asV2.recipient.value as Uint8Array
        const params = call.asV2.params as DefaultMintParams_CreateToken
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

    if (event.isV2) {
        const { collectionId, tokenId, issuer, initialSupply } = event.asV2
        console.log(
            `Block: ${ctx.block.height}, event: ${ctx.event.name}, collectionId: ${collectionId}, tokenId: ${tokenId}`
        )
        return { collectionId, tokenId, issuer, initialSupply }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenCreated(ctx: EventHandlerContext) {
    console.log("MultiTokens.TokenCreated")
    const eventData = getEventData(ctx as EventHandlerContext)

    if (ctx.event.call) {
        const callData = getCallData(ctx, ctx.event.call)

        if (!eventData || !callData) return

        const collection = await ctx.store.get<Collection>(Collection, eventData.collectionId.toString())

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
