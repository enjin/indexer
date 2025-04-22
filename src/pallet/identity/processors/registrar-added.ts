import { Event as EventModel, IdentityRegistrar } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'

export async function registrarAdded(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.registrarAdded(item)
    const registrars = await mappings.identity.storage.registrars(block)

    if (!registrars) {
        throw new Error('No registrars found')
    }

    if (!registrars[event.registrarIndex]) {
        throw new Error(`Registrar with index ${event.registrarIndex} not found`)
    }

    const account = await getOrCreateAccount(ctx, registrars[event.registrarIndex]?.account)

    const registrar = new IdentityRegistrar({
        id: account.id,
        account,
        fee: 0n,
        index: event.registrarIndex,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registrar)

    return undefined
}
