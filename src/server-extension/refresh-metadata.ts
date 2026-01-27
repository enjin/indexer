import { Field, ObjectType, Query, Resolver, Arg, registerEnumType, InputType } from 'type-graphql'
import 'reflect-metadata'
import { type EntityManager } from 'typeorm'
import NodeCache from 'node-cache'
import { Collection, Metadata, Token, TokenGroup } from '~/model'
import { QueueUtils } from '~/queue'

enum RefreshMetadataResponseStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

registerEnumType(RefreshMetadataResponseStatus, {
    name: 'RefreshMetadataResponseStatus',
})

enum RefreshMetadataType {
    COLLECTION = 'collection',
    TOKEN = 'token',
    TOKEN_GROUP = 'token_group',
}

registerEnumType(RefreshMetadataType, {
    name: 'RefreshMetadataType',
})

@InputType()
class RefreshMetadataInput {
    @Field(() => String)
    id!: string

    @Field(() => RefreshMetadataType)
    type!: RefreshMetadataType
}

@ObjectType()
class RefreshMetadataResponse {
    @Field(() => RefreshMetadataResponseStatus)
    status!: RefreshMetadataResponseStatus

    @Field({ nullable: true })
    error?: string
}

const rateLimitMap = new NodeCache({ stdTTL: 60 * 60 * 24, checkperiod: 60 * 60 })
const mins30 = 30 * 60 * 1000 // 30 minutes in ms

@Resolver()
export class RefreshMetadataResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => RefreshMetadataResponse, { nullable: false })
    async refreshMetadata(
        @Arg('ids', () => [RefreshMetadataInput]) ids: RefreshMetadataInput[]
    ): Promise<RefreshMetadataResponse> {
        const manager = await this.tx()

        if (!ids || ids.length === 0) {
            return { status: RefreshMetadataResponseStatus.ERROR, error: 'No IDs provided' }
        }

        const errors: string[] = []
        const processedCollections = new Set<string>()
        const urisToRefresh = new Set<string>()

        for (const item of ids) {
            try {
                let resource!: Collection | Token | TokenGroup | null
                let collectionId: string | null = null

                // Handle rate limiting for collections
                if (item.type === RefreshMetadataType.COLLECTION) {
                    const rateLimit = rateLimitMap.get<number>(item.id)

                    if (rateLimit) {
                        const timeLeft = Math.ceil((rateLimit + mins30 - Date.now()) / 1000)

                        if (timeLeft > 0) {
                            errors.push(
                                `Rate limit exceeded for collection ${item.id}. Retry after ${timeLeft} seconds.`
                            )
                            continue
                        }
                    }
                    rateLimitMap.set(item.id, Date.now())
                }

                // Find the resource based on type
                if (item.type === RefreshMetadataType.TOKEN) {
                    resource = await manager.findOne(Token, {
                        where: { id: item.id },
                        relations: {
                            attributes: true,
                        },
                    })

                    if (!resource) {
                        errors.push(`Token not found: ${item.id}`)
                        continue
                    }

                    if (hasExpiredMetadata(resource.metadata)) {
                        const uri = includeResourceUris(resource)
                        if (uri) {
                            urisToRefresh.add(uri)
                        }
                    }
                } else if (item.type === RefreshMetadataType.COLLECTION) {
                    resource = await manager.findOne(Collection, {
                        where: { id: item.id },
                        relations: {
                            attributes: true,
                        },
                    })
                    collectionId = item.id

                    if (!resource) {
                        errors.push(`Collection not found: ${item.id}`)
                        continue
                    }

                    if (hasExpiredMetadata(resource.metadata)) {
                        const uri = includeResourceUris(resource)
                        if (uri) {
                            urisToRefresh.add(uri)
                        }
                    }
                } else if (item.type === RefreshMetadataType.TOKEN_GROUP) {
                    resource = await manager.findOne(TokenGroup, {
                        where: { id: item.id },
                        relations: {
                            attributes: true,
                        },
                    })
                    if (!resource) {
                        errors.push(`Token group not found: ${item.id}`)
                        continue
                    }

                    if (hasExpiredMetadata(resource.metadata)) {
                        const uri = includeResourceUris(resource)
                        if (uri) {
                            urisToRefresh.add(uri)
                        }
                    }

                    // Dispatch token group metadata computation
                    await QueueUtils.dispatchComputeTokenGroupMetadata(item.id)
                    continue
                } else {
                    errors.push(`Unknown type for ID: ${item.id}`)
                    continue
                }

                // Dispatch metadata computation for tokens and collections
                await QueueUtils.dispatchComputeMetadata({
                    id: resource.id,
                    type: item.type === RefreshMetadataType.TOKEN ? 'token' : 'collection',
                    force: true,
                    allTokens: false,
                    traits: true,
                })

                // Dispatch stats computation for collections (only once per collection)
                if (
                    item.type === RefreshMetadataType.COLLECTION &&
                    collectionId &&
                    !processedCollections.has(collectionId)
                ) {
                    await QueueUtils.dispatchComputeStats(collectionId)
                    processedCollections.add(collectionId)
                }
            } catch (error) {
                errors.push(`Error processing ${item.id}: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        }

        if (errors.length > 0) {
            return {
                status: RefreshMetadataResponseStatus.ERROR,
                error: errors.join('; '),
            }
        }

        return { status: RefreshMetadataResponseStatus.SUCCESS }
    }
}

function hasExpiredMetadata(metadata: Metadata | null | undefined): boolean {
    return (metadata?.lastUpdated && metadata.lastUpdated < new Date(Date.now() - 6 * 60 * 60 * 1000)) || false
}

function includeResourceUris(resource: Collection | Token | TokenGroup): string | null {
    const attributes = resource.attributes ?? []
    const uriAttribute = attributes.find((a) => a.key === 'uri')
    if (uriAttribute) {
        return uriAttribute.value
    }

    return null
}
