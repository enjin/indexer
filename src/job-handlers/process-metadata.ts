import { IsNull } from 'typeorm'
import Queue from 'bull'
import connection from '../connection'
import { JobData } from '../jobs/process-metadata'
import { Attribute, Collection, Metadata, Token } from '../model'
import { fetchMetadata, metadataParser } from '../mappings/util/metadata'

type MetadataType = {
    id: string
    metadata: any
    uri: string
    last_updated_at: Date
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager
    const jobData = job.data

    let resource: Collection | Token | null
    let attributes: Attribute[] = []
    if (jobData.type === 'collection') {
        resource = await em.findOne(Collection, {
            where: { id: jobData.resourceId },
        })
        attributes = await em.find(Attribute, {
            where: { collection: { id: jobData.resourceId }, token: IsNull() },
        })
    } else {
        resource = await em.findOne(Token, {
            where: {
                id: jobData.resourceId,
            },
            relations: {
                attributes: true,
            },
        })
        attributes = resource?.attributes ?? []
    }

    if (!resource) {
        done(null, 'Resource not found')
        return
    }

    const uriAttribute = attributes.find((a) => a.key === 'uri')
    let externalMetadata: any = {}
    let metadata = new Metadata()

    if (uriAttribute) {
        const response = await connection.query<MetadataType[]>('select * from metadata.metadata where id = $1 LIMIT 1', [
            jobData.resourceId,
        ])

        if (response.length > 0 && response[0].uri === uriAttribute.value && !jobData.force) {
            externalMetadata = response[0].metadata
        } else {
            const externalResponse = await fetchMetadata(uriAttribute.value)
            if (externalResponse) {
                if (response.length > 0) {
                    await connection.query(
                        'update metadata.metadata set metadata = $1, uri = $2, last_updated_at = NOW() where id = $3',
                        [externalMetadata, uriAttribute.value, jobData.resourceId]
                    )
                } else {
                    await connection.query(
                        'insert into metadata.metadata (id, metadata, uri, last_updated_at) values ($1, $2, $3, NOW())',
                        [jobData.resourceId, externalMetadata, uriAttribute.value]
                    )
                }

                externalMetadata = externalResponse
            }
        }

        metadata = metadataParser(
            metadata,
            uriAttribute,
            externalMetadata,
            uriAttribute.value.includes('{id}.json') || uriAttribute.value.includes('%7Bid%7D.json')
        )
    }

    // add other attributes
    attributes
        .filter((a) => a.key !== 'uri')
        .forEach(async (a) => {
            metadata = metadataParser(metadata, a, null)
        })

    resource.metadata = metadata

    await em.save(resource)

    done(null, { id: jobData.resourceId })
}
