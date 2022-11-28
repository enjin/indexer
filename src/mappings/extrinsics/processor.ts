import { CallHandlerContext } from '../types/contexts'
import { Extrinsic, Fee } from '../../model'
import { getOrCreateAccount } from '../util/entities'
import { encodeId } from '../../common/tools'

export async function save(ctx: CallHandlerContext): Promise<void> {
    if (!ctx.extrinsic.signature?.address) {
        return
    }
    const address = Uint8Array.from(
        Buffer.from(ctx.extrinsic.signature.address.value.toString().replace('0x', ''), 'hex')
    )
    const signer = await getOrCreateAccount(ctx, encodeId(address))
    const fee = new Fee({
        amount: ctx.extrinsic.fee,
        who: signer.id,
    })

    const call = ctx.extrinsic.call.name.split('.')
    const extrinsic = new Extrinsic({
        id: ctx.call.id,
        extrinsicIndex: ctx.extrinsic.id,
        extrinsicHash: ctx.extrinsic.hash,
        blockNumber: ctx.block.height,
        blockHash: ctx.block.hash,
        success: ctx.extrinsic.success,
        pallet: call[0],
        method: call[1],
        args: ctx.extrinsic.call.args,
        signature: JSON.stringify(ctx.extrinsic.signature.signature),
        signer,
        nonce: signer.nonce,
        tip: ctx.extrinsic.tip,
        fee,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(Extrinsic, extrinsic as any)
}
