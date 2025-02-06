import { hexToString } from '@polkadot/util'
import { UnsupportedEventError } from '../../../common/errors'
import { Event as EventModel, Identity } from '../../../model'
import { CommonContext, CallItem, BlockHeader } from '../../types/contexts'
import { identity } from '../../../types/generated/calls'

function getCallData(call: CallItem) {
    if (identity.renameSub.matrixEnjinV1000.is(call)) {
        return identity.renameSub.matrixEnjinV1000.decode(call)
    }

    throw new UnsupportedEventError(identity.renameSub.name)
}

export async function renameSub(ctx: CommonContext, block: BlockHeader, item: CallItem): Promise<EventModel | undefined> {
    const callData = getCallData(item)

    const id = callData.sub.__kind !== 'Index' ? callData.sub.value : null

    if (!id) return undefined

    const sub = await ctx.store.findOneByOrFail(Identity, {
        id,
    })
    sub.name = callData.data.__kind !== 'None' ? hexToString(callData.data.value) : null

    await ctx.store.save(sub)

    return undefined
}
