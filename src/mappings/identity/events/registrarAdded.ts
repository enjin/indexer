import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { IdentityRegistrarAddedEvent } from '../../../types/generated/events'
import { Event as EventModel, IdentityRegistrar } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { IdentityRegistrarsStorage } from '../../../types/generated/storage'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityRegistrarAddedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getRegistrars(ctx: CommonContext, block: SubstrateBlock) {
    const data = new IdentityRegistrarsStorage(ctx, block)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function registrarAdded(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.RegistrarAdded', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    const registrars = await getRegistrars(ctx, block)

    if (!registrars[eventData.registrarIndex]) {
        throw new Error(`Registrar with index ${eventData.registrarIndex} not found`)
    }

    const account = await getOrCreateAccount(ctx, registrars[eventData.registrarIndex]!.account)

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
