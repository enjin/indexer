import { dataHandlerContext } from '~/contexts'
import { NativeTokenMetadata, Token } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { hexToString } from '@polkadot/util'
import { safeString } from '~/util/tools'

export async function computeTokenNativeMetadata(_job: Job, id: string): Promise<void> {
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

    if (!rpcTokenJson.metadata) {
        await _job.log(`Token ${token.id} has no native metadata, skipping`)
        await _job.updateProgress(100)
        return
    }

    token.nativeMetadata = new NativeTokenMetadata({
        decimalCount: rpcTokenJson.metadata.decimalCount,
        symbol: safeString(hexToString(rpcTokenJson.metadata.symbol)),
        name: safeString(hexToString(rpcTokenJson.metadata.name)),
    })

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} native metadata computed`)
    await _job.updateProgress(100)
}
