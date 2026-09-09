import { dataHandlerContext } from '~/contexts'
import { NativeTokenMetadata, Token } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { hexToString } from '@polkadot/util'
import { safeString } from '~/util/tools'
import { FinalizedTokenStorageReader } from './token-storage-reader'

export async function computeTokenNativeMetadata(_job: Job, id: string): Promise<void> {
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

    if (!rpcToken.metadata || '__kind' in rpcToken.metadata) {
        await _job.log(`Token ${token.id} has no native metadata, skipping`)
        await _job.updateProgress(100)
        return
    }

    token.nativeMetadata = new NativeTokenMetadata({
        decimalCount: rpcToken.metadata.decimalCount,
        symbol: safeString(hexToString(rpcToken.metadata.symbol)),
        name: safeString(hexToString(rpcToken.metadata.name)),
    })

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} native metadata computed`)
    await _job.updateProgress(100)
}
