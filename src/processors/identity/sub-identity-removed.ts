import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Identity } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import * as mappings from './../../mappings'
export async function subIdentityRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.subIdentityRemoved(item)

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
