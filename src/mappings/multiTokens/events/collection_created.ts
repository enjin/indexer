import { EventHandlerContext, ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import { Collection, MintPolicy, TransferPolicy } from '../../../model'

interface CallData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
}

function getCallData(ctx: ExtrinsicHandlerContext): CallData | undefined {
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
    const event = new MultiTokensCollectionCreatedEvent(ctx)
    if (event.isV2) {
        const { collectionId } = event.asV2
        console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}, collectionId: ${collectionId}`)
        return collectionId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionCreated(ctx: EventHandlerContext) {
    const collectionId = getEventData(ctx)
    const callData = getCallData(ctx as ExtrinsicHandlerContext)

    if (!collectionId || !callData) return

    const collection = new Collection({
        id: collectionId.toString(),
        // owner: null, // TODO
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
        totalDeposit: 0n, // TODO
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(Collection, collection)
}
