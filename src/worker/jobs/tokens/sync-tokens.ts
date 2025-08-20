import { connectionManager } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncTokens(job: Job) {
    const em = await connectionManager()
    const stream = await em.getRepository(Token).createQueryBuilder('token').select('token.id', 'id').stream()

    let count = 0

    stream.on('data', async (data: any) => {
        const id: string | undefined = data?.id ?? data?.token_id
        if (!id) {
            console.error('syncTokens: row without id', data)
            return
        }

        await job.log(`Dispatched sync for token ${id}`)
        QueueUtils.dispatchComputeTokenInfusion(id)
        QueueUtils.dispatchComputeTokenSupply(id)
        count++
    })

    stream.on('end', async () => {
        await job.log(`Dispatched sync for ${count} tokens`)
    })

    stream.on('error', (error) => {
        console.error('syncTokens: stream error', error)
    })
}
