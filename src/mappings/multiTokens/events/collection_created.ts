import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import { Collection, MintPolicy, TransferPolicy } from '../../../model'
import { encodeId } from '../../../common/tools'
import {
    BlockHandlerContext,
    CallHandlerContext,
    CommonHandlerContext,
    EventHandlerContext,
} from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

interface CallData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
}

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

function getCallData(ctx: CallHandlerContext): CallData | undefined {
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

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionCreatedEvent(ctx)
    console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}`)

    if (event.isV2) {
        const { collectionId, owner } = event.asV2
        console.log(`collectionId: ${collectionId}`)
        return { collectionId, owner }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionCreated(ctx: BlockHandlerContext) {
    const eventData = getEventData(ctx as EventHandlerContext)
    const callData = getCallData(ctx as CallHandlerContext)

    if (!eventData || !callData) return

    const account = await getOrCreateAccount(ctx, encodeId(eventData.owner))
    const collection = new Collection({
        id: eventData.collectionId.toString(),
        owner: account,
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

    await ctx.store.insert(collection)
}
