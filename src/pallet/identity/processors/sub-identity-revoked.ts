import { Event as EventModel, Identity } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

export async function subIdentityRevoked(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.subIdentityRevoked(item)

    const sub = await getOrCreateAccount(ctx, event.sub)
    const identity = await ctx.store.findOneOrFail<Identity>(Identity, {
        where: { id: sub.id },
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
