import { Event as EventModel, Identity, Registration } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'

export async function identityKilled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.identityKilled(item)

    const identity = await ctx.store.findOneOrFail<Identity>(Identity, {
        relations: {
            super: { info: true },
            sub: {
                info: true,
            },
        },
        where: { id: event.who },
    })
    const registration = await ctx.store.findOneByOrFail<Registration>(Registration, { id: identity.id })

    await ctx.store.remove(registration)

    await Promise.all(
        identity.sub.map(async (sub) => {
            if (sub.isSub) return ctx.store.remove(sub)
            sub.super = null
            sub.name = sub.info.display || sub.info.legal
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

    return undefined
}
