import { connectionManager } from '../../contexts'
import { Attribute } from '../../model'
import { Job } from 'bullmq'
import { QueueUtils } from '../../queue'
import { ReadStream } from 'fs'

interface AttributeStream {
    collection_id?: string
    token_id?: string
}

export async function syncMetadata(job: Job, ids: string[] | null) {
    const em = await connectionManager()
    const collectionStream = await em
        .getRepository(Attribute)
        .createQueryBuilder('attr')
        .select('DISTINCT attr.collection_id')
        .where('attr.collection_id IS NOT NULL')
        .stream()

    processAttribute(job, collectionStream)

    const tokenStream = await em
        .getRepository(Attribute)
        .createQueryBuilder('attr')
        .select('DISTINCT attr.token_id')
        .where('attr.token_id IS NOT NULL')
        .stream()

    processAttribute(job, tokenStream)
}

function processAttribute(job: Job, stream: ReadStream) {
    let count = 0

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

            QueueUtils.dispatchComputeMetadata(resourceId, resourceType, false, false)
            count++
        } catch (error) {
            console.error('Failed to process attribute stream data:', error)
        }
    })

    stream.on('end', async () => {
        console.log(`Dispatched computeMetadata for ${count} assets`)
        await job.log(`Dispatched computeMetadata for ${count} assets`)
    })

    stream.on('error', (error) => {
        console.error('Failed to process attribute stream:', error)
    })
}
