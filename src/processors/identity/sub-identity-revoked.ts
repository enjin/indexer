import { Event as EventModel, Identity } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function subIdentityRevoked(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.subIdentityRevoked(item)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const identity = await ctx.store.findOneOrFail<Identity>(Identity, {
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
