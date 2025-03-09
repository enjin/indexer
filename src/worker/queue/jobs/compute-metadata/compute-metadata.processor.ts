import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { connectionManager } from '../../../../contexts'
import { Attribute, Collection, Metadata, Token } from '../../../../model'
import { EntityManager, IsNull } from 'typeorm'
import { fetchMetadata, metadataParser } from '../../../../utils/metadata'
import { QueueUtils } from '../..'

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

export class ComputeMetadataProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const con = await connectionManager()

        const result = await con.query(
            `
        SELECT count(*) as active_connections 
        FROM pg_stat_activity 
        WHERE datname = $1
      `,
            [con.connection.options.database]
        )

        await job.log(`Active connections: ${parseInt(result[0].active_connections)}`)

        const jobData = job.data
        await con.transaction('READ UNCOMMITTED', async (em) => {
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
                            where: {
                                collection: { id: jobData.resourceId.split('-')[0] },
                                key: 'uri',
                                token: IsNull(),
                            },
                        }),
                    ])
                    attributes = resource?.attributes ?? []
                }

                if (!resource) {
                    // return done(new Error('Resource not found'), null)
                    return
                }

                let uriAttribute = null

                if (collectionUriAttribute && collectionUriAttribute.value.includes('{id}')) {
                    uriAttribute = {
                        ...collectionUriAttribute,
                        value: collectionUriAttribute.value.replace('{id}', resource.id),
                    }
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
                    const response = await em.connection.query<MetadataType[]>(
                        'select * from metadata.metadata where id = $1 LIMIT 1',
                        [jobData.resourceId]
                    )

                    if (
                        response.length > 0 &&
                        response[0].uri === uriAttribute.value &&
                        typeof response[0].metadata === 'object' &&
                        !jobData.force
                    ) {
                        await job.log(`Metadata for ${jobData.resourceId} already exists`)
                        await job.log(JSON.stringify(response[0].metadata))
                        externalMetadata = response[0].metadata
                    } else {
                        const externalResponse = await fetchMetadata(uriAttribute.value, job)
                        if (externalResponse) {
                            if (response.length > 0) {
                                await em.connection.query(
                                    'update metadata.metadata set metadata = $1, uri = $2, last_updated_at = NOW() where id = $3',
                                    [externalResponse, uriAttribute.value, jobData.resourceId]
                                )
                            } else {
                                await em.connection.query(
                                    'insert into metadata.metadata (id, metadata, uri, last_updated_at) values ($1, $2, $3, NOW())',
                                    [jobData.resourceId, externalResponse, uriAttribute.value]
                                )
                            }

                            externalMetadata = externalResponse
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

                if (jobData.type === 'collection' && jobData.allTokens) {
                    console.log('Processing all tokens in collection', jobData.resourceId)

                    const batch = tokensInBatch(em, jobData.resourceId)

                    for await (const tokens of batch) {
                        tokens.forEach((token) => {
                            QueueUtils.dispatchComputeMetadata(token.id, 'token', jobData.force)
                        })
                    }
                }
                // done(null, { id: jobData.resourceId })
            } catch (e: any) {
                // done('message' in e ? e.message : e, null)
            }
        })
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new ComputeMetadataProcessor()
