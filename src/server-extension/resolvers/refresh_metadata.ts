/* eslint-disable max-classes-per-file */
import { Field, ObjectType, Query, Resolver, Arg, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { BigInteger } from '@subsquid/graphql-server'
import { Collection, Metadata, Token } from '../../model'
import { getMetadata } from '../../mappings/util/metadata'
import { computeTraits } from '../../jobs/compute-traits'
import { CollectionService } from '../../services'

enum RefreshMetadataResponseStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

registerEnumType(RefreshMetadataResponseStatus, {
    name: 'RefreshMetadataResponseStatus',
})

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
        @Arg('collectionId') collectionId: string,
        @Arg('tokenId', () => BigInteger, { nullable: true }) tokenId: bigint
    ): Promise<RefreshMetadataResponse> {
        const manager = await this.tx()
        let resource!: Collection | Token | null

        if (!tokenId) {
            resource = await manager.findOne(Collection, {
                where: { id: collectionId },
                relations: {
                    attributes: true,
                },
            })
        } else {
            resource = await manager.findOne(Token, {
                where: {
                    tokenId,
                    collection: {
                        id: collectionId,
                    },
                },
                relations: {
                    attributes: true,
                },
            })
        }

        if (!resource) {
            return { status: RefreshMetadataResponseStatus.ERROR, error: 'Resource not found' }
        }
        if (!resource.metadata) {
            resource.metadata = new Metadata()
        }
        resource.metadata = await getMetadata(resource.metadata, resource.attributes.find((a) => a.key === 'uri') ?? null)
        const syncAttributesPromise = resource.attributes
            .filter((a) => a.key !== 'uri')
            .map(async (a) => {
                if (resource && resource.metadata) {
                    resource.metadata = await getMetadata(resource.metadata, a)
                }
            })

        await Promise.all(syncAttributesPromise)
        try {
            await manager.save(resource)
        } catch (error) {
            if (error instanceof Error) {
                return { status: RefreshMetadataResponseStatus.ERROR, error: error.message }
            }
            return { status: RefreshMetadataResponseStatus.ERROR, error: 'Unknown error' }
        }
        new CollectionService(manager).sync(collectionId)

        computeTraits(collectionId)

        return { status: RefreshMetadataResponseStatus.SUCCESS }
    }
}
