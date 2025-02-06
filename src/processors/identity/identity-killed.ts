import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, EventItem, BlockHeader } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.identityKilled.matrixEnjinV1000.is(event)) {
        return events.identity.identityKilled.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identityKilled.name)
}

export async function identityKilled(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    const identity = await ctx.store.findOneOrFail(Identity, {
        relations: {
            super: { info: true },
            sub: {
                info: true,
            },
        },
        where: { id: eventData.who },
    })
    const registration = await ctx.store.findOneByOrFail(Registration, { id: eventData.who })

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
