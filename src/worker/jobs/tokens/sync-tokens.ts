import { connectionManager } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncTokens(job: Job) {
    const em = await connectionManager()
    const stream = await em.getRepository(Token).createQueryBuilder('token').select('token.id').stream()

    stream.on('data', (data: any) => {
        const token = data as Token

        // QueueUtils.dispatchComputeTokenSupply(token.id)
        // QueueUtils.dispatchComputeTokenBestListing(token.id)
        QueueUtils.dispatchComputeTokenInfusion(token.id)
    })

    await job.log(`Dispatched sync for tokens`)
}
