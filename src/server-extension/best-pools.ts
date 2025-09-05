import { Query, Resolver, Args, ArgsType, Field, ObjectType } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { Account, NominationPool, PoolState } from '~/model'
import { Validate } from 'class-validator'
import { IsPublicKey } from './helpers'

@ArgsType()
class BestPoolsArgs {
    @Field(() => String, { nullable: true })
    @Validate(IsPublicKey)
    accountId?: string
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

@Resolver()
export class BestPoolsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [BestPool])
    async bestPools(@Args() { accountId }: BestPoolsArgs): Promise<BestPool[]> {
        const manager = await this.tx()

        const account = await manager
            .getRepository(Account)
            .createQueryBuilder('account')
            .where('account.id = :accountId', { accountId })
            .getOne()
        const amount = account?.balance.free ?? 0n

        const pools = await manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .leftJoin('pool.members', 'member')
            .leftJoin('member.tokenAccount', 'ta')
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
            ])
            .addSelect('COALESCE(SUM(ta.balance), 0)', 'totalStake')
            .where('pool.state = :state', { state: PoolState.Open })
            .andWhere('pool.availableStakePoints >= :amount', { amount })
            .andWhere('COALESCE(jsonb_array_length(pool.slashes), 0) = 0')
            .groupBy('pool.id')
            .getRawMany()

        if (pools.length === 0) return []

        const poolsWithRate = pools.filter((p) => p.apy != null)

        let thresholdRate: bigint | null = null
        if (poolsWithRate.length > 0) {
            const allStakes = poolsWithRate.reduce((acc, p) => acc + p.totalStake, 0n)
            thresholdRate = poolsWithRate
                .filter((p) => p.totalStake > 0n)
                .map((p) => {
                    return {
                        apy: p.apy,
                        weight: p.totalStake / allStakes,
                    }
                })
                .reduce((acc, p) => acc + p.apy * BigInt(p.weight), 0n)

            thresholdRate = (thresholdRate * 8n) / 10n
        } else {
            const simpleAvg = poolsWithRate.reduce((acc, p) => acc + p.apy, 0n) / BigInt(poolsWithRate.length)
            thresholdRate = (simpleAvg * 8n) / 10n
        }

        const rateFiltered = pools.filter((p) => {
            if (thresholdRate == null) return true
            if (p.apy == 0) return true
            return p.apy >= thresholdRate
        })

        if (rateFiltered.length === 0) return []

        const allZeroRewards = rateFiltered.every((p) => !p.apy || p.apy === 0n)
        if (allZeroRewards) {
            rateFiltered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        } else {
            rateFiltered.sort((a, b) => {
                const ar = a.apy ?? 0n
                const br = b.apy ?? 0n
                if (ar === br) return a.createdAt.getTime() - b.createdAt.getTime()
                return br > ar ? 1 : -1
            })
        }

        return pools.slice(0, 5).map(
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
                })
        )
    }
}
