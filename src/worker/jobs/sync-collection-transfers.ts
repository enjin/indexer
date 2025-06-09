import { dataHandlerContext } from '../../contexts'
import { Collection } from '../../model'
import { Job } from 'bullmq'
import Rpc from '../../util/rpc'
import { getOrCreateAccount } from '../../util/entities'

export async function syncCollectionTransfer(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()

    const pendingTransfer = await api.query.multiTokens.pendingCollectionTransfers(id)

    const resJson: any = pendingTransfer.toJSON()

    _job.log(`Syncing collection transfer for ${id}`)
    _job.log(resJson)

    if (!resJson) {
        return
    }

    const collection = await ctx.store.findOneByOrFail<Collection>(Collection, { id })

    const realOwner = await api.query.multiTokens.collections(id)
    const realOwnerJson: any = realOwner.toJSON()

    if (!realOwnerJson) {
        return
    }

    _job.log(`Real owner for ${id} is ${realOwnerJson.owner}`)

    collection.owner = await getOrCreateAccount(ctx, realOwnerJson.owner)

    await ctx.store.save(collection)
}
