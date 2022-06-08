import { EventHandlerContext, ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import { Collection } from '../../../model'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'

interface EventData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
}

function getEventData(ctx: ExtrinsicHandlerContext): bigint {
    const event = new MultiTokensCollectionCreatedEvent(ctx)

    if (event.isV2) {
        return event.asV2.collectionId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
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

export async function handleCreateCollection(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)
    if (!data) return

    return
    // console.log(ctx.event)
    // const collectionId = getEventData(ctx)
    //
    // const collection = new Collection({
    //     id: collectionId.toString(),
    //     maxTokenCount: data.maxTokenCount,
    //     maxTokenSupply: data.maxTokenSupply,
    //     forceSingleMint: data.forceSingleMint,
    // })
    //
    // await ctx.store.insert(Collection, collection)
}
