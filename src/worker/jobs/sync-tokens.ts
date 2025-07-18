import { connectionManager } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncTokens(job: Job) {
    const em = await connectionManager()
    const tokens = await em.getRepository(Token).createQueryBuilder('token').select('token.id').getMany()

    for (const token of tokens) {
        // QueueUtils.dispatchComputeTokenSupply(token.id)
        // QueueUtils.dispatchComputeTokenBestListing(token.id)
        QueueUtils.dispatchComputeTokenInfusion(token.id)
    }

    await job.log(`Dispatched sync for ${tokens.length} tokens`)
}
