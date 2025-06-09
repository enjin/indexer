import { dataHandlerContext } from '../../contexts'
import { Collection } from '../../model'
import { Job } from 'bullmq'
import Rpc from '../../util/rpc'
import { getOrCreateAccount, unwrapAccount } from '../../util/entities'
import { decodeAddress } from '../../util/tools'


export async function syncCollectionTransfer(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()

    const pendingTransfer = await api.query.multiTokens.pendingCollectionTransfers(id)

    const resJson: any = pendingTransfer.toJSON()

    if (!resJson) {
        return
    }

    const collection = await ctx.store.findOneByOrFail<Collection>(Collection, { id })

    const realOwner = await api.query.multiTokens.collections(id)
    const realOwnerJson: any = realOwner.toJSON()

    if (!realOwnerJson) {
        return
    }

    collection.owner = await getOrCreateAccount(ctx, decodeAddress(realOwnerJson.owner))

    await ctx.store.save(collection)
}
