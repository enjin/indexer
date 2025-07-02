import { IsNull, Not } from 'typeorm'
import { connectionManager } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncTokens(job: Job) {
    const em = await connectionManager()
    const tokens = await em.find(Token, {
        select: ['id'],
        where: {
            bestListing: Not(IsNull()),
        },
    })

    for (const token of tokens) {
        // QueueUtils.dispatchComputeTokenSupply(token.id)
        QueueUtils.dispatchComputeTokenBestListing(token.id)
    }

    await job.log(`Dispatched sync for ${tokens.length} tokens`)
}
