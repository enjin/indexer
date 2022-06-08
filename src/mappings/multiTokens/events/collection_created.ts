import { EventHandlerContext, ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import { Collection, MintPolicy, TransferPolicy } from '../../../model'

interface EventData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
}

function getCallData(ctx: ExtrinsicHandlerContext): EventData | undefined {
    const call = new MultiTokensCreateCollectionCall(ctx)
    if (call.isV2) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV2.descriptor.policy.mint
        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

function getEventData(ctx: EventHandlerContext): bigint {
    console.log(ctx.event.name)
    const event = new MultiTokensCollectionCreatedEvent(ctx)

    if (event.isV2) {
        const { collectionId } = event.asV2
        return collectionId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionCreated(ctx: EventHandlerContext) {
    const collectionId = getEventData(ctx)
    const ctxData = ctx as ExtrinsicHandlerContext
    const callData = getCallData(ctxData)

    if (!collectionId || !callData) return

    const collection = new Collection({
        id: collectionId.toString(),
        // owner: null,
        mintPolicy: new MintPolicy({
            maxTokenCount: callData.maxTokenCount,
            maxTokenSupply: callData.maxTokenSupply,
            forceSingleMint: callData.forceSingleMint,
        }),
        transferPolicy: new TransferPolicy({
            isFrozen: false,
        }),
        burnPolicy: null,
        attributePolicy: null,
        tokenCount: 0,
        attributeCount: 0,
        totalDeposit: 0n,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(Collection, collection)
}
