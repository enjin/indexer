import { Event as EventModel, IdentityRegistrar } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function registrarAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.registrarAdded(item)

    const registrars = await mappings.identity.storage.registrars(block)

    if (!registrars) {
        throw new Error('No registrars found')
    }

    if (!registrars[eventData.registrarIndex]) {
        throw new Error(`Registrar with index ${eventData.registrarIndex} not found`)
    }

    const account = await getOrCreateAccount(ctx, registrars[eventData.registrarIndex]?.account)
    if (!account) {
        return
    }

    const registrar = new IdentityRegistrar({
        id: account.id,
        account,
        fee: 0n,
        index: eventData.registrarIndex,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registrar)

    return
}
