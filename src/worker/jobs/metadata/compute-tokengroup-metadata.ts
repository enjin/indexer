import { Attribute, Metadata, TokenGroup } from '~/model'
import { connectionManager } from '~/contexts'
import { fetchMetadata, metadataParser } from '~/util/metadata'
import { Job } from 'bullmq'

type MetadataType = {
    id: string
    metadata: any
    uri: string
    last_updated_at: Date
}

export async function computeTokenGroupMetadata(job: Job) {
    const con = await connectionManager()

    await con.transaction('READ COMMITTED', async (em) => {
        const jobData = job.data

        let resource: TokenGroup | null
        let attributes: Attribute[] = []

        resource = await em.findOne(TokenGroup, {
            where: {
                id: jobData.id,
            },
            relations: {
                attributes: true,
            },
        })

        if (!resource) {
            await job.log(`TokenGroup ${jobData.id} not found`)
            return
        }

        await job.log(`TokenGroup ${resource.id} found`)

        attributes = resource.attributes ?? []

        let uriAttribute = attributes.find((a) => a.key === 'uri') ?? null

        let externalMetadata: any = {}
        let metadata = new Metadata()

        if (uriAttribute) {
            const response = await em.connection.query<MetadataType[]>(
                'select * from metadata.metadata where id = $1 LIMIT 1',
                [jobData.id]
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

        await job.log(`TokenGroup ${resource.id} metadata computed successfully`)
    })
}
