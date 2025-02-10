import { hexToString } from '@polkadot/util'
import { CallNotDefinedError } from '../../common/errors'
import { Event as EventModel, Identity, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function subIdentityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.identity.events.subIdentityAdded(item)
    const call = mappings.identity.calls.addSub(item.call)

    const sub = await getOrCreateAccount(ctx, event.sub)

    const { main } = event
    const existing = await ctx.store.findOneBy<Identity>(Identity, { id: sub.id })

    if (existing) {
        existing.super = new Identity({ id: main })
        existing.name = call.data.__kind !== 'None' ? hexToString(call.data.value) : null
        await ctx.store.save(existing)

        return undefined
    }

    const identity = new Identity({
        id: sub.id,
        account: sub,
        name: call.data.__kind !== 'None' ? hexToString(call.data.value) : null,
        super: new Identity({ id: main }),
        isSub: true,
        info: new Registration({ id: main }),
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(identity)

    return undefined
}
