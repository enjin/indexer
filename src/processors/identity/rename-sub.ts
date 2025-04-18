import { hexToString } from '@polkadot/util'
import { Event as EventModel, Identity } from '../../model'
import { Block, CallItem, CommonContext } from '../../contexts'
import * as mappings from '../../mappings'

export async function renameSub(ctx: CommonContext, block: Block, item: CallItem): Promise<EventModel | undefined> {
    const call = mappings.identity.calls.renameSub(item)

    const id = call.sub.__kind !== 'Index' ? call.sub.value : null

    if (!id) return undefined

    const sub = await ctx.store.findOneByOrFail<Identity>(Identity, {
        id,
    })
    sub.name = call.data.__kind !== 'None' ? hexToString(call.data.value) : null

    await ctx.store.save(sub)

    return undefined
}
