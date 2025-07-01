import { hexToString, isAscii } from '@polkadot/util'
import { Event as EventModel, Identity } from '~/model'
import { Block, CallItem, CommonContext } from '~/contexts'
import * as mappings from '~/pallet/index'

export async function renameSub(ctx: CommonContext, block: Block, item: CallItem): Promise<EventModel | undefined> {
    const call = mappings.identity.calls.renameSub(item)

    const id = call.sub.__kind !== 'Index' ? call.sub.value : null

    if (!id) return undefined

    const sub = await ctx.store.findOneByOrFail<Identity>(Identity, {
        id,
    })

    let name = null

    if (call.data.__kind !== 'None') {
        name = hexToString(call.data.value)
        if (!isAscii(name)) {
            name = call.data.value
        }
    }

    sub.name = name
    await ctx.store.save(sub)

    return undefined
}
