import { hexToString } from '@polkadot/util'
import { Event as EventModel, Identity } from '../../model'
import { BlockHeader, CallItem, CommonContext } from '../../common/types/contexts'
import * as mappings from '../../mappings'

export async function renameSub(ctx: CommonContext, block: BlockHeader, item: CallItem): Promise<EventModel | undefined> {
    const callData = mappings.identity.calls.renameSub(item)

    const id = callData.sub.__kind !== 'Index' ? callData.sub.value : null

    if (!id) return undefined

    const sub = await ctx.store.findOneByOrFail<Identity>(Identity, {
        id,
    })
    sub.name = callData.data.__kind !== 'None' ? hexToString(callData.data.value) : null

    await ctx.store.save(sub)

    return undefined
}
