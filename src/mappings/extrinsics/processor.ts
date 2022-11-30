import { hexToU8a } from '@polkadot/util'
import { CallHandlerContext } from '../types/contexts'
import { Extrinsic, Fee } from '../../model'
import { getOrCreateAccount } from '../util/entities'

export async function save(ctx: CallHandlerContext): Promise<void> {
    if (!ctx.extrinsic.signature?.address) {
        return
    }

    const signer = await getOrCreateAccount(ctx, hexToU8a(ctx.extrinsic.signature.address.value))
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
        signature: ctx.extrinsic.signature.signature,
        signer,
        nonce: signer.nonce,
        tip: ctx.extrinsic.tip,
        fee,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(Extrinsic, extrinsic as any)
}
