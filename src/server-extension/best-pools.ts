import { Query, Resolver, Args, ArgsType, Field, ObjectType, ID, InputType, Int } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { Account, NominationPool, PoolState } from '~/model'
import { Validate } from 'class-validator'
import { IsPublicKey } from './helpers'
import { Big } from 'big.js'
import { DateTimeColumn as DateTimeColumn_ } from '@subsquid/typeorm-store/lib/decorators/columns/DateTimeColumn'
import { BigInteger } from '@subsquid/graphql-server'

@ArgsType()
class BestPoolsArgs {
    @Field(() => String, { nullable: true })
    @Validate(IsPublicKey)
    accountId?: string

    @Field(() => Int, { defaultValue: 5 })
    limit: number = 5
}

@InputType()
class TokenFilterCondition {
    @Field(() => Boolean, { nullable: true })
    token_isNull?: boolean

    @Field(() => String, { nullable: true })
    key_eq?: string

    @Field(() => [String], { nullable: true })
    key_in?: string[]
}

@InputType()
class TokenAttributeWhereInput {
    @Field(() => [TokenFilterCondition], { nullable: true })
    AND?: TokenFilterCondition[]
}

@ObjectType()
class TokenAttribute {
    @Field(() => ID)
    id!: string

    @Field({ nullable: false })
    key!: string

    @Field({ nullable: false })
    value!: string

    @Field(() => BigInteger)
    deposit!: typeof BigInteger

    @DateTimeColumn_({ nullable: false })
    createdAt!: Date

    @DateTimeColumn_({ nullable: false })
    updatedAt!: Date
}

@ObjectType()
class DegenCollectionAttribute {
    @Field(() => ID)
    id!: string

    @Field({ nullable: false })
    key!: string

    @Field({ nullable: false })
    value!: string

    @Field(() => BigInteger)
    deposit!: typeof BigInteger

    @DateTimeColumn_({ nullable: false })
    createdAt!: Date

    @DateTimeColumn_({ nullable: false })
    updatedAt!: Date
}

@ObjectType()
class DegenCollection {
    @Field(() => ID)
    id!: string

    @Field(() => [DegenCollectionAttribute], { nullable: true })
    attributes!: DegenCollectionAttribute[]

    constructor(props: Partial<DegenCollection>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class DegenToken {
    @Field(() => String)
    id!: string

    @Field(() => [TokenAttribute], { nullable: true })
    attributes!: TokenAttribute[]

    @Field(() => DegenCollection)
    collection!: DegenCollection

    constructor(props: Partial<DegenToken>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class BestPool {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => BigInt, { nullable: true })
    rate?: BigInt | null

    @Field(() => Number)
    apy!: number

    @Field(() => BigInt)
    points!: BigInt

    @Field(() => BigInt)
    capacity!: BigInt

    @Field(() => DegenToken)
    degenToken!: DegenToken

    @Field(() => BigInt)
    availableStakeAmount!: BigInt

    @Field(() => BigInt)
    totalStake!: BigInt

    @Field(() => BigInt)
    availableStakePoints!: BigInt

    @Field(() => Date)
    createdAt!: Date

    constructor(props: Partial<BestPool>) {
        Object.assign(this, props)
    }
}

@Resolver(() => BestPool)
export class BestPoolsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [BestPool])
    async bestPools(@Args() { accountId, limit }: BestPoolsArgs): Promise<BestPool[]> {
        const manager = await this.tx()

        const account = await manager
            .getRepository(Account)
            .createQueryBuilder('account')
            .where('account.id = :accountId', { accountId })
            .getOne()
        const amount: bigint = account?.balance.free ?? 0n

        const minBondAmount = '1000000000000000000';

        const pools = await manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .leftJoin('pool.members', 'member')
            .leftJoin('member.tokenAccount', 'ta')
            .leftJoin('pool.degenToken', 'token')
            .select([
                'pool.id AS id',
                'pool.name AS name',
                'pool.rate AS rate',
                'pool.apy AS apy',
                'pool.points AS points',
                'pool.capacity AS capacity',
                'pool.availableStakeAmount AS "availableStakeAmount"',
                'pool.availableStakePoints AS "availableStakePoints"',
                'pool.createdAt AS "createdAt"',
                'token.id AS "tokenId"',
            ])
            .addSelect(
                `(SELECT json_agg(json_build_object('id', attr.id, 'key', attr.key, 'value', attr.value, 'deposit', attr.deposit)) 
                          FROM attribute attr 
                          WHERE attr.token_id = token.id) AS "tokenAttributes"`
            )
            .addSelect(
                `(SELECT json_agg(json_build_object('id', attr.id, 'key', attr.key, 'value', attr.value, 'deposit', attr.deposit)) 
                          FROM attribute attr 
                          WHERE attr.collection_id = token.collection_id) AS "collectionAttributes"`
            )
            .addSelect('token.collection_id AS "collectionId"')
            .addSelect('COALESCE(SUM(ta.balance), 0)', 'totalStake')
            .where('pool.state = :state', { state: PoolState.Open })
            .andWhere('pool.availableStakePoints >= :amount', { amount })
            .andWhere('pool.capacity - pool.points >= :minBondAmount', { minBondAmount })
            .groupBy('pool.id')
            .addGroupBy('token.id')
            .getRawMany()

        if (pools.length === 0) return []

        const poolsWithRate = pools.filter((p) => p.apy > 0)

        let thresholdRate: Big | null = Big(0)
        if (poolsWithRate.length > 0) {
            const allStakes = poolsWithRate.reduce((acc, p) => acc.add(Big(p.totalStake)), Big(0))
            thresholdRate = poolsWithRate
                .filter((p) => Big(p.totalStake).gt(0))
                .map((p) => {
                    return {
                        apy: p.apy,
                        weight: Big(p.totalStake).div(allStakes),
                    }
                })
                .reduce((acc, p) => Big(acc).add(Big(p.apy).mul(p.weight)), Big(0))

            thresholdRate = thresholdRate.mul(8).div(10)
        } else {
            const simpleAvg = poolsWithRate.reduce((acc, p) => acc.add(Big(p.apy)), Big(0)).div(poolsWithRate.length)
            thresholdRate = simpleAvg.mul(8).div(10)
        }

        const rateFiltered = poolsWithRate.filter((p) => {
            if (thresholdRate == null) return true
            return p.apy >= thresholdRate
        })

        if (rateFiltered.length === 0) return []

        const allZeroRewards = rateFiltered.every((p) => !p.apy || p.apy === 0)
        if (allZeroRewards) {
            rateFiltered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        } else {
            rateFiltered.sort((a, b) => {
                const ar = a.apy ?? 0
                const br = b.apy ?? 0
                if (ar === br) return a.createdAt.getTime() - b.createdAt.getTime()
                return br > ar ? 1 : -1
            })
        }

        return rateFiltered.slice(0, limit).map(
            (p) =>
                new BestPool({
                    id: p.id,
                    name: p.name,
                    rate: p.rate ?? null,
                    apy: p.apy,
                    points: p.points,
                    capacity: p.capacity,
                    totalStake: p.totalStake,
                    availableStakeAmount: p.availableStakeAmount,
                    availableStakePoints: p.availableStakePoints,
                    createdAt: p.createdAt,
                    degenToken: new DegenToken({
                        id: p.tokenId,
                        attributes: (() => {
                            if (typeof p.tokenAttributes === 'string') {
                                return JSON.parse(p.tokenAttributes)
                            }
                            return p.tokenAttributes ?? []
                        })(),
                        collection: new DegenCollection({
                            id: p.collectionId,
                            attributes: (() => {
                                return p.collectionAttributes ?? []
                            })(),
                        }),
                    }),
                })
        )
    }
}
