import { Attribute, Metadata, TokenGroup } from '~/model'
import { connectionManager } from '~/contexts'
import { fetchMetadata, metadataParser } from '~/util/metadata'
import { Job } from 'bullmq'
import { IsNull } from 'typeorm'

type MetadataType = {
    id: string
    metadata: any
    uri: string
    last_updated_at: Date
}

export async function computeTokenGroupMetadata(job: Job) {
    try {
        const con = await connectionManager()

        await con.transaction('READ COMMITTED', async (em) => {
            const jobData = job.data

            let resource: TokenGroup | null
            let attributes: Attribute[] = []

            await job.updateProgress(10)

            resource = await em.findOne(TokenGroup, {
                where: {
                    id: jobData.id,
                },
                relations: {
                    attributes: true,
                    collection: true,
                },
            })

            if (!resource) {
                await job.log(`TokenGroup ${jobData.id} not found`)
                return
            }

            await job.log(`TokenGroup ${resource.id} found`)
            await job.updateProgress(20)

            attributes = resource.attributes ?? []

            // Inherit URI from collection if the group has no own uri attribute.
            // When the collection URI contains {id}, replace it with <group_id>-group.
            // A group's own on-chain uri attribute always takes precedence.
            let collectionUriAttribute: Attribute | null = null
            if (resource.collection) {
                collectionUriAttribute = await em.findOne(Attribute, {
                    where: {
                        collection: { id: resource.collection.id },
                        key: 'uri',
                        token: IsNull(),
                        tokenGroup: IsNull(),
                    },
                })
            }

            let uriAttribute: Attribute | null = null

            if (collectionUriAttribute) {
                const inheritedUri = collectionUriAttribute.value.includes('{id}')
                    ? collectionUriAttribute.value.replace('{id}', `${resource.id}-group`)
                    : collectionUriAttribute.value
                uriAttribute = { ...collectionUriAttribute, value: inheritedUri }
            }

            // On-chain uri attribute on the group overrides the inherited collection URI
            const ownUriAttribute = attributes.find((a) => a.key === 'uri') ?? null
            if (ownUriAttribute) {
                const resolvedValue = ownUriAttribute.value.includes('{id}')
                    ? ownUriAttribute.value.replace('{id}', `${resource.id}-group`)
                    : ownUriAttribute.value
                uriAttribute = { ...ownUriAttribute, value: resolvedValue }
            }

            let externalMetadata: any = {}
            let metadata = new Metadata()

            await job.updateProgress(30)

            if (uriAttribute) {
                const response = await em.connection.query<MetadataType[]>(
                    'select * from metadata.metadata where id = $1 LIMIT 1',
                    [jobData.id]
                )

                await job.updateProgress(40)

                if (
                    response.length > 0 &&
                    response[0].uri === uriAttribute.value &&
                    typeof response[0].metadata === 'object' &&
                    !jobData.force
                ) {
                    externalMetadata = response[0].metadata
                    await job.updateProgress(70)
                } else {
                    const externalResponse = await fetchMetadata(uriAttribute.value, job)
                    await job.updateProgress(60)

                    if (externalResponse) {
                        if (response.length > 0) {
                            await em.connection.query(
                                'update metadata.metadata set metadata = $1, uri = $2, last_updated_at = NOW() where id = $3',
                                [externalResponse, uriAttribute.value, jobData.id]
                            )
                        } else {
                            await em.connection.query(
                                'insert into metadata.metadata (id, metadata, uri, last_updated_at) values ($1, $2, $3, NOW())',
                                [jobData.id, externalResponse, uriAttribute.value]
                            )
                        }

                        externalMetadata = externalResponse
                    }
                    await job.updateProgress(70)
                }

                metadata = metadataParser(metadata, uriAttribute, externalMetadata)
                await job.updateProgress(80)
            }

            // On-chain non-uri attributes are applied last, taking precedence over inherited metadata
            attributes
                .filter((a) => a.key !== 'uri')
                .forEach(async (a) => {
                    metadata = metadataParser(metadata, a, null)
                })

            await job.updateProgress(90)

            resource.metadata = metadata

            await em.save(resource)

            await job.log(`TokenGroup ${resource.id} metadata computed successfully`)
            await job.updateProgress(100)
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined

        await job.log(`Error in computeTokenGroupMetadata: ${errorMessage}`)
        if (errorStack) {
            await job.log(`Stack: ${errorStack}`)
        }

        throw new Error(`Failed to compute token group metadata for ${job.data.id}: ${errorMessage}`)
    }
}
