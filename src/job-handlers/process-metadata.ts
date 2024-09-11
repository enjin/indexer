import { EntityManager, IsNull } from 'typeorm'
import Queue from 'bull'
import connection from '../connection'
import { JobData, processMetadata } from '../jobs/process-metadata'
import { Attribute, Collection, Metadata, Token } from '../model'
import { fetchMetadata, metadataParser } from '../mappings/util/metadata'

type MetadataType = {
    id: string
    metadata: any
    uri: string
    last_updated_at: Date
}
async function* tokensInBatch(em: EntityManager, collectionId: string) {
    let skip = 0
    const limit = 500

    while (true) {
        // eslint-disable-next-line no-await-in-loop
        const items = await em
            .getRepository(Token)
            .createQueryBuilder('token')
            .select('token.id')
            .addSelect('token.collection_id')
            .where('token.collection_id = :collectionId', { collectionId })
            .skip(skip)
            .take(limit)
            .getMany()

        yield items
        if (items.length === 0 || items.length < limit) {
            return
        }
        skip += items.length
    }
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            done(new Error('Failed to initialize connection'))
        })
    }

    const em = connection.manager
    const jobData = job.data

    let resource: Collection | Token | null
    let attributes: Attribute[] = []
    let collectionUriAttribute: Attribute | null = null
    try {
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

        let uriAttribute = null

        if (collectionUriAttribute && collectionUriAttribute.value.includes('{id}')) {
            uriAttribute = { ...collectionUriAttribute, value: collectionUriAttribute.value.replace('{id}', resource.id) }
        }

        if (attributes.some((a) => a.key === 'uri')) {
            uriAttribute = attributes.find((a) => a.key === 'uri')
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
                const externalResponse = await fetchMetadata(uriAttribute.value, job)
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

        if (jobData.type === 'collection' && jobData.allTokens === true) {
            // eslint-disable-next-line no-console
            console.log('Processing all tokens in collection', jobData.resourceId)

            const batch = tokensInBatch(em, jobData.resourceId)

            // eslint-disable-next-line no-restricted-syntax
            for await (const tokens of batch) {
                tokens.forEach((token) => {
                    processMetadata(token.id, 'token', true)
                })
            }
        }
        done(null, { id: jobData.resourceId })
    } catch (e: any) {
        done('message' in e ? e.message : e, null)
    }
}
