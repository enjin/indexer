/* eslint-disable max-classes-per-file */
import { Field, ObjectType, Query, Resolver, Arg, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import { type EntityManager } from 'typeorm'
import { BigInteger } from '@subsquid/graphql-server'
import { Collection, Token } from '../../model'
import { computeTraits } from '../../jobs/compute-traits'
import { syncCollectionStats } from '../../jobs/collection-stats'
import { processMetadata } from '../../jobs/process-metadata'

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

        const isToken = tokenId !== null && tokenId !== undefined

        if (isToken) {
            resource = await manager.findOne(Token, {
                where: {
                    tokenId,
                    collection: {
                        id: collectionId,
                    },
                },
            })
        } else {
            resource = await manager.findOne(Collection, {
                where: { id: collectionId },
            })
        }

        if (!resource) {
            return { status: RefreshMetadataResponseStatus.ERROR, error: 'Resource not found' }
        }

        processMetadata(resource.id, isToken ? 'token' : 'collection', true)

        if (!isToken) {
            syncCollectionStats(collectionId)
            computeTraits(collectionId)
        }

        return { status: RefreshMetadataResponseStatus.SUCCESS }
    }
}
