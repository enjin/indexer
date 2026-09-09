import { dataHandlerContext } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { FinalizedTokenStorageReader } from './token-storage-reader'

export async function computeTokenInfusion(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()

    await _job.updateProgress(20)

    const token = await ctx.store.findOne<Token>(Token, { where: { id }, relations: { collection: true } })

    if (!token) {
        await _job.log(`Token ${id} not found`)
        await _job.updateProgress(100)
        return
    }

    await _job.updateProgress(40)

    const storage = await FinalizedTokenStorageReader.create(api)
    const rpcToken = await storage.token(BigInt(token.collection.id), token.tokenId)

    await _job.updateProgress(70)

    if (!rpcToken) {
        await _job.log(`RPC token ${token.id} not found`)
        await _job.updateProgress(100)
        return
    }

    token.anyoneCanInfuse = rpcToken.anyoneCanInfuse ?? false

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} infusion computed`)
    await _job.updateProgress(100)
}
