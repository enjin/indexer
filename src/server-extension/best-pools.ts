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
            .where('pool.state = :state', { state: PoolState.Open })
            .andWhere('pool.availableStakePoints >= :amount', { amount })
            .andWhere('COALESCE(jsonb_array_length(pool.slashes), 0) = 0')
            .getMany()

        if (pools.length === 0) return []

        const poolsWithRate = pools.filter((p) => p.rate != null)

        let thresholdRate: bigint | null = null
        if (poolsWithRate.length > 0) {
            const totalWeight = poolsWithRate.reduce((acc, p) => acc + (p.points ?? 0n), 0n)
            if (totalWeight > 0n) {
                const weightedSum = poolsWithRate.reduce((acc, p) => acc + p.rate * (p.points ?? 0n), 0n)
                thresholdRate = (weightedSum * 8n) / (10n * totalWeight) // 80% of weighted average
            } else {
                const simpleAvg = poolsWithRate.reduce((acc, p) => acc + p.rate, 0n) / BigInt(poolsWithRate.length)
                thresholdRate = (simpleAvg * 8n) / 10n
            }
        }

        const rateFiltered = pools.filter((p) => {
            if (thresholdRate == null) return true
            if (p.rate == null) return true
            return p.rate >= thresholdRate
        })

        if (rateFiltered.length === 0) return []

        const allZeroRewards = rateFiltered.every((p) => !p.rate || p.rate === 0n)
        if (allZeroRewards) {
            rateFiltered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        } else {
            rateFiltered.sort((a, b) => {
                const ar = a.rate ?? 0n
                const br = b.rate ?? 0n
                if (ar === br) return a.createdAt.getTime() - b.createdAt.getTime()
                return br > ar ? 1 : -1
            })
        }

        return rateFiltered.slice(0, 5).map(
            (p) =>
                new BestPool({
                    id: p.id,
                    name: p.name,
                    rate: p.rate ?? null,
                    apy: p.apy,
                    points: p.points,
                    capacity: p.capacity,
                    availableStakeAmount: p.availableStakeAmount,
                    availableStakePoints: p.availableStakePoints,
                    createdAt: p.createdAt,
                })
        )
    }
}
