import { UnknownVersionError } from '../../../common/errors'
import { events, storage } from '../../../types/generated'
import { Event as EventModel, IdentityRegistrar } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.registrarAdded.matrixEnjinV1000.is(event)) {
        return events.identity.registrarAdded.matrixEnjinV1000.decode(event)
    }

    throw new UnknownVersionError(events.identity.registrarAdded.name)
}

function getRegistrars(block: BlockHeader) {
    if (storage.identity.registrars.matrixEnjinV1000.is(block)) {
        return storage.identity.registrars.matrixEnjinV1000.get(block)
    }

    throw new UnknownVersionError('Identity.Registrars')
}

export async function registrarAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    const registrars = await getRegistrars(block)

    if (!registrars) {
        throw new Error('No registrars found')
    }

    if (!registrars[eventData.registrarIndex]) {
        throw new Error(`Registrar with index ${eventData.registrarIndex} not found`)
    }

    const account = await getOrCreateAccount(ctx, registrars[eventData.registrarIndex]!.account)

    const registrar = new IdentityRegistrar({
        id: account.id,
        account,
        fee: 0n,
        index: eventData.registrarIndex,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registrar)

    return undefined
}
