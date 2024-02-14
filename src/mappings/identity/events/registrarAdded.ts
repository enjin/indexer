import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { IdentityRegistrarAddedEvent } from '../../../types/generated/events'
import { Event as EventModel, IdentityRegistrar } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { IdentityAddRegistrarCall } from '../../../types/generated/calls'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityRegistrarAddedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentityAddRegistrarCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function registrarAdded(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.RegistrarAdded', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const eventData = getEventData(ctx, item.event)
    const callData = getCallData(ctx, item.event.call)

    if (!callData.account.value) throw new Error('Account not defined')

    const account = await getOrCreateAccount(ctx, callData.account.value)

    const registrar = new IdentityRegistrar({
        id: account.id,
        account,
        fee: 0n,
        index: eventData.registrarIndex,
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(registrar)

    return undefined
}
