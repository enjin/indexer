import { dataHandlerContext } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'

export async function computeTokenInfusion(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()

    await _job.updateProgress(20)

    const token = await ctx.store.findOneOrFail<Token>(Token, { where: { id }, relations: { collection: true } })

    await _job.updateProgress(40)

    const rpcToken = await api.query.multiTokens.tokens(token.collection.id, token.tokenId)
    const rpcTokenJson: any = rpcToken.toJSON()

    await _job.updateProgress(70)

    if (!rpcTokenJson) {
        await _job.log(`RPC token ${token.id} not found`)
        await _job.updateProgress(100)
        return
    }

    token.anyoneCanInfuse = rpcTokenJson.anyoneCanInfuse

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} infusion computed`)
    await _job.updateProgress(100)
}
