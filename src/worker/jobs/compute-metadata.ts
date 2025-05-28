import { EntityManager, IsNull } from 'typeorm'
import { Attribute, Collection, Metadata, Token } from '../../model'
import { connectionManager } from '../../contexts'
import { fetchMetadata, metadataParser } from '../../util/metadata'
import { Job } from 'bullmq'
import { QueueUtils } from '../../queue'

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

export async function computeMetadata(job: Job) {
    const con = await connectionManager()

    await con.transaction('READ COMMITTED', async (em) => {
        const jobData = job.data
        await job.log(job.data)

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
            resource = await em.findOne(Token, {
                where: {
                    id: jobData.resourceId,
                },
                relations: {
                    attributes: true,
                },
            })

            await job.log(`Found resource ${resource?.id}`)

            collectionUriAttribute = await em.findOne(Attribute, {
                where: {
                    collection: { id: jobData.resourceId.split('-')[0] },
                    key: 'uri',
                    token: IsNull(),
                },
            })

            attributes = resource?.attributes ?? []
        }

        if (!resource) {
            await job.log(`Resource ${jobData.resourceId} not found`)
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

        // Check if a token / collection has {id} placeholder in its own attribute
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

        resource.name = metadata.name
        resource.metadata = metadata

        await em.save(resource)

        if (jobData.type === 'collection' && jobData.allTokens) {
            const batch = tokensInBatch(em, jobData.resourceId)

            for await (const tokens of batch) {
                tokens.forEach((token) => {
                    QueueUtils.dispatchComputeMetadata(token.id, 'token', jobData.force)
                })
            }
        }
    })
}
