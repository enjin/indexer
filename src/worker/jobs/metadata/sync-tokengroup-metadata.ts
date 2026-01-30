import { connectionManager } from '~/contexts'
import { Attribute } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'
import { ReadStream } from 'fs'

interface TokenGroupStream {
    token_group_id?: string
}

export async function syncTokenGroupMetadata(job: Job) {
    try {
        const em = await connectionManager()

        await job.updateProgress(10)

        const tokenGroupStream = await em
            .getRepository(Attribute)
            .createQueryBuilder('attr')
            .select('DISTINCT attr.token_group_id')
            .where('attr.token_group_id IS NOT NULL')
            .stream()

        await job.updateProgress(20)

        processTokenGroup(job, tokenGroupStream)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined
        
        await job.log(`Error in syncTokenGroupMetadata: ${errorMessage}`)
        if (errorStack) {
            await job.log(`Stack: ${errorStack}`)
        }
        
        throw new Error(`Failed to sync token group metadata: ${errorMessage}`)
    }
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

            // Update progress every 10 items (20% -> 90%)
            if (count % 10 === 0) {
                job.updateProgress(Math.min(90, 20 + Math.floor(count / 10))).catch(() => {})
            }
        } catch (error) {
            console.error('Failed to process token group stream data:', error)
        }
    })

    stream.on('end', async () => {
        console.log(`Dispatched computeTokenGroupMetadata for ${count} token groups`)
        await job.log(`Dispatched computeTokenGroupMetadata for ${count} token groups`)
        await job.updateProgress(100)
    })

    stream.on('error', (error) => {
        console.error('Failed to process token group stream:', error)
    })
}
