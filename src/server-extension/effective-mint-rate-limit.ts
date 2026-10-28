import { BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { Collection, MintRateLimit, MintRateLimitState, Token } from '~/model'

@ObjectType()
class EffectiveMintRateLimitValue {
    @Field(() => BigInteger)
    period!: bigint

    @Field(() => BigInteger)
    max!: bigint
}

@ObjectType()
class FutureMintRateLimitChange {
    @Field(() => EffectiveMintRateLimitValue, { nullable: true })
    newLimit!: EffectiveMintRateLimitValue | null

    @Field(() => BigInteger)
    effectiveBlock!: bigint
}

@ObjectType()
export class EffectiveMintRateLimitResult {
    @Field(() => BigInteger)
    asOfBlock!: bigint

    @Field(() => EffectiveMintRateLimitValue, { nullable: true })
    limit!: EffectiveMintRateLimitValue | null

    @Field(() => FutureMintRateLimitChange, { nullable: true })
    pending!: FutureMintRateLimitChange | null
}

function limitValue(limit?: MintRateLimit | null): EffectiveMintRateLimitValue | null {
    return limit ? { period: limit.period, max: limit.max } : null
}

export function mintRateLimitAtBlock(
    state: MintRateLimitState | null | undefined,
    asOfBlock: bigint
): Pick<EffectiveMintRateLimitResult, 'limit' | 'pending'> {
    if (!state) return { limit: null, pending: null }

    const pending = state.pending
    if (!pending) return { limit: limitValue(state.limit), pending: null }

    if (pending.effectiveBlock <= asOfBlock) {
        return { limit: limitValue(pending.newLimit), pending: null }
    }

    return {
        limit: limitValue(state.limit),
        pending: {
            newLimit: limitValue(pending.newLimit),
            effectiveBlock: pending.effectiveBlock,
        },
    }
}

function canonicalId(id: string, name: string): string {
    if (!/^(0|[1-9]\d*)$/.test(id)) throw new Error(`${name} must be a non-negative decimal integer`)
    return BigInt(id).toString()
}

@Resolver()
export class EffectiveMintRateLimitResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => EffectiveMintRateLimitResult, { nullable: true })
    async effectiveMintRateLimit(
        @Arg('collectionId', () => String) collectionId: string,
        @Arg('tokenId', () => String, { nullable: true }) tokenId?: string | null
    ): Promise<EffectiveMintRateLimitResult | null> {
        const collectionKey = canonicalId(collectionId, 'collectionId')
        const tokenKey = tokenId == null ? null : canonicalId(tokenId, 'tokenId')
        const manager = await this.tx()

        // Match the height exposed by squidStatus, including processed hot blocks.
        const [statusRows, entity] = await Promise.all([
            manager.query(`
                SELECT COALESCE(h.height, f.height) AS height
                FROM squid_processor.status AS f
                FULL JOIN (
                    SELECT height FROM squid_processor.hot_block
                    ORDER BY height DESC
                    LIMIT 1
                ) AS h ON TRUE
                WHERE f.id = 0
            `) as Promise<{ height: string | number }[]>,
            tokenKey === null
                ? manager.getRepository(Collection).findOneBy({ id: collectionKey })
                : manager.getRepository(Token).findOneBy({ id: `${collectionKey}-${tokenKey}` }),
        ])

        if (!entity) return null
        const indexedHeight = statusRows[0]?.height
        if (indexedHeight === undefined || indexedHeight === null) {
            throw new Error('Latest indexed block is unavailable')
        }
        const asOfBlock = BigInt(indexedHeight)

        return {
            asOfBlock,
            ...mintRateLimitAtBlock(entity.mintRateLimit, asOfBlock),
        }
    }
}
