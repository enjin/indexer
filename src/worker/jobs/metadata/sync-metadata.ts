import { connectionManager } from '~/contexts'
import { Attribute } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'
import { ReadStream } from 'fs'

interface AttributeStream {
    collection_id?: string
    token_id?: string
}

export async function syncMetadata(job: Job) {
    await job.updateProgress(10)
    const em = await connectionManager()
    const collectionStream = await em
        .getRepository(Attribute)
        .createQueryBuilder('attr')
        .select('DISTINCT attr.collection_id')
        .where('attr.collection_id IS NOT NULL')
        .stream()

    await job.updateProgress(20)
    await processAttribute(job, collectionStream)
    await job.updateProgress(100)
}

function processAttribute(job: Job, stream: ReadStream): Promise<void> {
    return new Promise((resolve, reject) => {
        let count = 0
        const force = job.data.force
        let progressUpdate = 0

        stream.on('data', (data: any) => {
            try {
                const parsed = data as AttributeStream
                console.log(`collection ${parsed.collection_id} // token ${parsed.token_id}`)

                const resourceType = parsed.collection_id !== undefined ? 'collection' : 'token'
                const resourceId = resourceType === 'collection' ? parsed.collection_id : parsed.token_id
                if (resourceId === undefined) {
                    console.error('Failed to process attribute stream data')
                    return
                }

                QueueUtils.dispatchComputeMetadata({ id: resourceId, type: resourceType, allTokens: true, force })
                count++
                
                // Update progress every 10 items (20% -> 90%)
                if (count % 10 === 0 && progressUpdate < 70) {
                    progressUpdate += 7
                    job.updateProgress(20 + progressUpdate).catch(() => {})
                }
            } catch (error) {
                console.error('Failed to process attribute stream data:', error)
            }
        })

        stream.on('end', async () => {
            console.log(`Dispatched computeMetadata for ${count} collections`)
            await job.log(`Dispatched computeMetadata for ${count} collections`)
            await job.updateProgress(90)
            resolve()
        })

        stream.on('error', (error) => {
            console.error('Failed to process attribute stream:', error)
            reject(error)
        })
    })
}
