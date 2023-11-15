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
    let collectionUriAttribute: Attribute | null = null
    if (jobData.type === 'collection') {
        ;[resource, attributes] = await Promise.all([
            em.findOne(Collection, {
                where: { id: jobData.resourceId },
            }),
            em.find(Attribute, {
                where: { collection: { id: jobData.resourceId }, token: IsNull() },
            }),
        ])
    } else {
        ;[resource, [collectionUriAttribute]] = await Promise.all([
            em.findOne(Token, {
                where: {
                    id: jobData.resourceId,
                },
                relations: {
                    attributes: true,
                },
            }),
            em.find(Attribute, {
                where: { collection: { id: jobData.resourceId.split('-')[0] }, key: 'uri', token: IsNull() },
            }),
        ])
        attributes = resource?.attributes ?? []
    }

    if (!resource) {
        done(null, 'Resource not found')
        return
    }

    let uriAttribute = attributes.find((a) => a.key === 'uri')

    if (collectionUriAttribute && collectionUriAttribute.value.includes('{id}')) {
        uriAttribute = { ...collectionUriAttribute, value: collectionUriAttribute.value.replace('{id}', resource.id) }
    }

    // check if token/collection has {id} placeholder in it's own attribute
    if (uriAttribute && uriAttribute.value.includes('{id}')) {
        uriAttribute = { ...uriAttribute, value: uriAttribute.value.replace('{id}', resource.id) }
    }

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
            if (externalResponse && typeof externalResponse === 'object' && !Array.isArray(externalResponse)) {
                if (response.length > 0) {
                    await connection.query(
                        'update metadata.metadata set metadata = $1, uri = $2, last_updated_at = NOW() where id = $3',
                        [externalResponse, uriAttribute.value, jobData.resourceId]
                    )
                } else {
                    await connection.query(
                        'insert into metadata.metadata (id, metadata, uri, last_updated_at) values ($1, $2, $3, NOW())',
                        [jobData.resourceId, externalResponse, uriAttribute.value]
                    )
                }

                externalMetadata = externalResponse
            } else if (response.length > 0) {
                externalMetadata = response[0].metadata
            }
        }

        metadata = metadataParser(metadata, uriAttribute, externalMetadata)
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
