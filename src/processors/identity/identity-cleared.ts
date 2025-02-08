import { Event as EventModel, Identity, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function identityCleared(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.identityCleared(item)

    const identity = await ctx.store.findOneOrFail<Identity>(Identity, {
        relations: { super: { info: true }, sub: true },
        where: { id: eventData.who },
    })

    await Promise.all(
        identity.sub.map(async (sub) => {
            if (sub.isSub) return ctx.store.remove(sub)
            sub.super = null
            return ctx.store.save(sub)
        })
    )

    if (identity.super) {
        identity.info = identity.super.info
        identity.isSub = true

        await ctx.store.save(identity)
    } else {
        await ctx.store.remove(identity)
    }

    const registeration = new Registration({
        id: eventData.who,
    })

    await ctx.store.remove(registeration)

    return undefined
}
