import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Identity } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.identity.subIdentityRevoked.enjinV110.is(event)) {
        return events.identity.subIdentityRevoked.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.subIdentityRevoked.name)
}

export async function subIdentityRevoked(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const identity = await ctx.store.findOneOrFail(Identity, {
        where: { id: account.id },
        relations: {
            info: true,
        },
    })

    if (!identity.isSub) {
        identity.super = null
        identity.name = identity.info.display || identity.info.legal
        await ctx.store.save(identity)
    } else {
        await ctx.store.remove(identity)
    }

    return undefined
}
