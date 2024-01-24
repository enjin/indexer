import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { IdentitySubIdentityAddedEvent } from '../../../types/generated/events'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { IdentityAddSubCall } from '../../../types/generated/calls'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentitySubIdentityAddedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentityAddSubCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function subIdentityAdded(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.SubIdentityAdded', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)
    const callData = getCallData(ctx, item.event.call)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const main = u8aToHex(eventData.main)

    const existing = await ctx.store.findOneBy(Identity, { id: account.id })

    if (existing) {
        existing.super = new Identity({ id: main })
        await ctx.store.save(existing)

        return undefined
    }

    const identity = new Identity({
        id: account.id,
        account,
        name: callData.data.__kind !== 'None' ? u8aToString(callData.data.value) : null,
        super: new Identity({ id: main }),
        isSub: true,
        info: new Registration({ id: main }),
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(identity)

    return undefined
}
