import { BalancesTransferAllCall } from '../../../types/generated/calls'
import { encodeId, getOriginAccountId, isAdressSS58 } from '../../../common/tools'
import { UnknownVersionError } from '../../../common/errors'
import { CallContext, CallHandlerContext } from '../../types/contexts'
import { saveTransfer } from '../../util/entities'
import { TransferType } from '../../../model'

interface EventData {
    to: Uint8Array
}

function getCallData(ctx: CallContext): EventData | undefined {
    console.log(ctx.call.name)
    const call = new BalancesTransferAllCall(ctx)
    if (call.isEfinityV1) {
        const { dest } = call.asEfinityV1
        return {
            to: dest.value as Uint8Array,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export async function handleTransferAll(ctx: CallHandlerContext) {
    const data = getCallData(ctx)
    if (!data) return

    const accountId = getOriginAccountId(ctx.call.origin)
    if (!accountId) return

    await saveTransfer(ctx, {
        id: ctx.call.id,
        timestamp: new Date(ctx.block.timestamp),
        blockNumber: ctx.block.height,
        extrinsicHash: ctx.extrinsic.hash,
        fromId: accountId,
        toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
        amount: 0n,
        tip: ctx.extrinsic.tip,
        error: ctx.extrinsic.error,
        success: ctx.call.success,
        type: TransferType.Native,
    })
}
