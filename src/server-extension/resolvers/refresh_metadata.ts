import { Arg, Field, ObjectType, Query, registerEnumType, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { type EntityManager } from 'typeorm'
import NodeCache from 'node-cache'
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

const rateLimitMap = new NodeCache({ stdTTL: 60 * 60 * 24, checkperiod: 60 * 60 })
const mins30 = 30 * 60 * 1000 // 30 minutes in ms

@Resolver()
export class RefreshMetadataResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => RefreshMetadataResponse, { nullable: false })
    async refreshMetadata(
        @Arg('collectionId') collectionId: string,
        @Arg('tokenId', () => BigInteger, { nullable: true }) tokenId: bigint,
        @Arg('allTokens') allTokens: boolean
    ): Promise<RefreshMetadataResponse> {
        const manager = await this.tx()
        let resource!: Collection | Token | null

        const isToken = tokenId !== null && tokenId !== undefined

        if (!isToken && allTokens) {
            const rateLimit = rateLimitMap.get<number>(collectionId)

            if (rateLimit) {
                const timeLeft = Math.ceil((rateLimit + mins30 - Date.now()) / 1000)

                if (timeLeft > 0) {
                    return {
                        status: RefreshMetadataResponseStatus.ERROR,
                        error: `You exceeded rate limit for ${collectionId}. Please retry after ${timeLeft} seconds.`,
                    }
                }
            }
            rateLimitMap.set(collectionId, Date.now())
        }

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

        processMetadata(resource.id, isToken ? 'token' : 'collection', true, allTokens)

        if (!isToken) {
            syncCollectionStats(collectionId)
        }

        computeTraits(collectionId)

        return { status: RefreshMetadataResponseStatus.SUCCESS }
    }
}
