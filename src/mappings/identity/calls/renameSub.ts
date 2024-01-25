import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Identity } from '../../../model'
import { Call } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { IdentityRenameSubCall } from '../../../types/generated/calls'

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentityRenameSubCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function renameSub(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: CallItem<'Identity.rename_sub', { call: true; extrinsic: true }>
): Promise<EventModel | undefined> {
    const callData = getCallData(ctx, item.call)

    if (!callData.sub.value) return undefined

    const identity = await ctx.store.findOneByOrFail(Identity, { id: u8aToHex(callData.sub.value) })
    identity.name = callData.data.__kind !== 'None' ? u8aToString(callData.data.value) : null

    await ctx.store.save(identity)

    return undefined
}
