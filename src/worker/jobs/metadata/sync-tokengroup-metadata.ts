import { connectionManager } from '~/contexts'
import { Attribute } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'
import { ReadStream } from 'fs'

interface TokenGroupStream {
    token_group_id?: string
}

export async function syncTokenGroupMetadata(job: Job) {
    const em = await connectionManager()
    const tokenGroupStream = await em
        .getRepository(Attribute)
        .createQueryBuilder('attr')
        .select('DISTINCT attr.token_group_id')
        .where('attr.token_group_id IS NOT NULL')
        .stream()

    processTokenGroup(job, tokenGroupStream)
}

function processTokenGroup(job: Job, stream: ReadStream) {
    let count = 0

    stream.on('data', (data: any) => {
        try {
            const parsed = data as TokenGroupStream
            console.log(`token group ${parsed.token_group_id}`)

            if (parsed.token_group_id === undefined) {
                console.error('Failed to process token group stream data')
                return
            }

            QueueUtils.dispatchComputeTokenGroupMetadata(parsed.token_group_id)
            count++
        } catch (error) {
            console.error('Failed to process token group stream data:', error)
        }
    })

    stream.on('end', async () => {
        console.log(`Dispatched computeTokenGroupMetadata for ${count} token groups`)
        await job.log(`Dispatched computeTokenGroupMetadata for ${count} token groups`)
    })

    stream.on('error', (error) => {
        console.error('Failed to process token group stream:', error)
    })
}
