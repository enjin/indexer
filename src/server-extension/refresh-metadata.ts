import { Field, ObjectType, Query, Resolver, Arg, registerEnumType, InputType } from 'type-graphql'
import 'reflect-metadata'
import { type EntityManager } from 'typeorm'
import { Collection, Token, TokenGroup } from '~/model'
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

@Resolver()
export class RefreshMetadataResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => RefreshMetadataResponse, { nullable: false })
    async refreshMetadata(
        @Arg('ids', () => [RefreshMetadataInput]) ids: RefreshMetadataInput[],
        @Arg('force', () => Boolean, { nullable: true }) force?: boolean,
        @Arg('allTokens', () => Boolean, { nullable: true }) allTokens?: boolean,
        @Arg('traits', () => Boolean, { nullable: true }) traits?: boolean
    ): Promise<RefreshMetadataResponse> {
        const manager = await this.tx()

        if (!ids || ids.length === 0) {
            return { status: RefreshMetadataResponseStatus.ERROR, error: 'No IDs provided' }
        }

        const errors: string[] = []
        const processedCollections = new Set<string>()

        for (const item of ids) {
            try {
                let resource!: Collection | Token | TokenGroup | null
                let collectionId: string | null = null

                // Find the resource based on type
                if (item.type === RefreshMetadataType.TOKEN) {
                    resource = await manager.findOne(Token, {
                        where: { id: item.id },
                    })

                    if (!resource) {
                        errors.push(`Token not found: ${item.id}`)
                        continue
                    }
                } else if (item.type === RefreshMetadataType.COLLECTION) {
                    resource = await manager.findOne(Collection, {
                        where: { id: item.id },
                    })
                    collectionId = item.id

                    if (!resource) {
                        errors.push(`Collection not found: ${item.id}`)
                        continue
                    }
                } else if (item.type === RefreshMetadataType.TOKEN_GROUP) {
                    resource = await manager.findOne(TokenGroup, {
                        where: { id: item.id },
                    })
                    if (!resource) {
                        errors.push(`Token group not found: ${item.id}`)
                        continue
                    }

                    // Dispatch token group metadata computation
                    await QueueUtils.dispatchComputeTokenGroupMetadata(item.id, undefined, force ?? true)
                    continue
                } else {
                    errors.push(`Unknown type for ID: ${item.id}`)
                    continue
                }

                // Dispatch metadata computation for tokens and collections
                await QueueUtils.dispatchComputeMetadata({
                    id: resource.id,
                    type: item.type === RefreshMetadataType.TOKEN ? 'token' : 'collection',
                    force: force ?? true,
                    allTokens: allTokens ?? false,
                    traits: traits ?? false,
                    delay: 10000,
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
