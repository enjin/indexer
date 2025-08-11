import { Event as EventModel, Identity, Registration } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

export async function identityCleared(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.identityCleared(item)

    const identity = await ctx.store.findOne<Identity>(Identity, {
        relations: { super: { info: true }, sub: true },
        where: { id: event.who },
    })

    if (!identity) return undefined

    const subs = identity.sub ?? []
    if (subs.length > 0) {
        await Promise.all(
            subs.map(async (sub) => {
                if (sub.isSub) return ctx.store.remove(sub)
                sub.super = null
                return ctx.store.save(sub)
            })
        )
    }

    if (identity.super && identity.super.info) {
        identity.info = identity.super.info
        identity.isSub = true
        await ctx.store.save(identity)
    } else {
        await ctx.store.remove(identity)
    }

    const registration = new Registration({
        id: event.who,
    })

    await ctx.store.remove(registration)

    return undefined
}
