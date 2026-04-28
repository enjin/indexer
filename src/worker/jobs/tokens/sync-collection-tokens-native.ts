import { connectionManager } from '~/contexts'
import { Collection, Token } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncCollectionTokensNative(job: Job) {
    const em = await connectionManager()
    const collectionId = job.data.id

    await job.updateProgress(10)

    let count = 0
    const stream = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id', 'id')
        .where('token.collection_id = :collectionId', { collectionId })
        .stream()
    stream.on('data', async (data: any) => {
        const id: string | undefined = data?.id ?? data?.token_id
        if (!id) {
            console.error('syncTokens: row without id', data)
            return
        }

        QueueUtils.dispatchComputeTokenNativeMetadata(id)
        count++

        // Update progress every 100 tokens (10% -> 90%)
        if (count % 100 === 0) {
            job.updateProgress(Math.min(90, 10 + Math.floor(count / 10))).catch(() => {})
        }
    })
    stream.on('end', async () => {
        await job.log(`Dispatched sync for ${count} tokens`)
        await job.updateProgress(100)
    })
    stream.on('error', (error) => {
        console.error('syncTokens: stream error', error)
    })
}
