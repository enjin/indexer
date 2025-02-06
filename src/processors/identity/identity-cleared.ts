import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityCleared.matrixEnjinV1000.is(event)) {
        return events.identity.identityCleared.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identityCleared.name)
}

export async function identityCleared(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    const identity = await ctx.store.findOneOrFail(Identity, {
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
