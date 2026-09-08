import { Job } from 'bullmq'
import { MoreThan } from 'typeorm'
import { dataHandlerContext } from '~/contexts'
import { Token } from '~/model'
import { QueueUtils } from '~/queue'
import Rpc from '~/util/rpc'
import { FinalizedTokenStorageReader } from './token-storage-reader'

export type BackfillEphemeralTokensData = {
    afterId?: string
    batchSize?: number
    blockHash?: string
}

const DEFAULT_BATCH_SIZE = 100
const MAX_BATCH_SIZE = 500

export async function backfillEphemeralTokens(job: Job<BackfillEphemeralTokensData>): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()
    const batchSize = Math.max(1, Math.min(job.data.batchSize ?? DEFAULT_BATCH_SIZE, MAX_BATCH_SIZE))
    const tokens = await ctx.store.find(Token, {
        where: job.data.afterId ? { id: MoreThan(job.data.afterId) } : {},
        relations: { collection: true },
        order: { id: 'ASC' },
        take: batchSize,
    })

    if (tokens.length === 0) {
        await job.log('Ephemeral token backfill complete')
        await job.updateProgress(100)
        return
    }

    const storage = await FinalizedTokenStorageReader.create(api, job.data.blockHash)
    const changed: Token[] = []

    for (const [index, token] of tokens.entries()) {
        const chainToken = await storage.token(BigInt(token.collection.id), token.tokenId)
        if (chainToken) {
            token.ephemeralExpiration = chainToken.ephemeralExpiration ?? null
            changed.push(token)
        }

        await job.updateProgress(Math.floor(((index + 1) / tokens.length) * 90))
    }

    if (changed.length > 0) await ctx.store.save(changed)

    const lastId = tokens[tokens.length - 1].id
    await job.log(`Backfilled ${changed.length} of ${tokens.length} token rows through ${lastId}`)

    if (tokens.length === batchSize) {
        await QueueUtils.dispatchBackfillEphemeralTokens({ afterId: lastId, batchSize, blockHash: storage.hash })
    }

    await job.updateProgress(100)
}
