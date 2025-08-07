import { Field, ObjectType, Query, Resolver, Args, ArgsType, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { PoolMember, NominationPool, TokenAccount, EraReward, PoolMemberRewards } from '~/model'
import { isValidAddress } from '~/util/tools'

const stakingTimeFrameMap = {
    DAY: '1 day',
    WEEK: '7 days',
    MONTH: '30 days',
    YEAR: '365 days',
    YTD: 'ytd',
    ALL: '0',
}

enum StakingTimeframeInput {
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    YTD = 'YTD',
    ALL = 'ALL',
}

registerEnumType(StakingTimeframeInput, {
    name: 'StakingTimeframeInput',
})

@ValidatorConstraint({ name: 'PublicKey', async: false })
class IsPublicKey implements ValidatorConstraintInterface {
    validate(value: string) {
        return isValidAddress(value)
    }

    defaultMessage() {
        return 'Invalid public key!'
    }
}

@ArgsType()
class AccountStakingSummaryArgs {
    @Field(() => String)
    @Validate(IsPublicKey)
    accountId!: string

    @Field(() => StakingTimeframeInput)
    timeFrame!: StakingTimeframeInput
}

@ObjectType()
export class PoolMemberReward {
    @Field(() => String)
    id!: string

    @Field(() => BigInt)
    points!: BigInt

    @Field(() => Number)
    era!: number

    @Field(() => Date)
    eraStartAt!: Date

    @Field(() => Number)
    apy!: number

    @Field(() => Number)
    averageApy!: number

    @Field(() => BigInt)
    rewards!: BigInt

    @Field(() => BigInt)
    accumulatedRewards!: BigInt
}

@ObjectType()
export class NominationPoolSummary {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => BigInt)
    accumulatedRewards!: BigInt

    @Field(() => Number)
    apy!: number

    @Field(() => BigInt)
    balance!: BigInt

    @Field(() => BigInt)
    rate!: BigInt

    @Field(() => BigInt)
    capacity!: BigInt

    constructor(props: Partial<NominationPoolSummary>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class NominationPoolSummaryResponse {
    @Field(() => [NominationPoolSummary])
    pools!: NominationPoolSummary[]

    @Field(() => [PoolMemberReward])
    rewards!: PoolMemberReward[]
}

@Resolver()
export class AccountStakingSummaryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => NominationPoolSummaryResponse)
    async accountStakingSummary(
        @Args() { accountId, timeFrame }: AccountStakingSummaryArgs
    ): Promise<NominationPoolSummaryResponse> {
        const manager = await this.tx()

        const poolData = await manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .innerJoin(PoolMember, 'pool_member', 'pool.id = pool_member.pool')
            .leftJoin(TokenAccount, 'token_account', 'token_account.id = pool_member.token_account_id')
            .select('pool.id', 'id')
            .addSelect('pool.name', 'name')
            .addSelect('pool.capacity', 'capacity')
            .addSelect('pool.apy', 'apy')
            .addSelect('pool.rate', 'rate')
            .addSelect('COALESCE(token_account.balance, 0)', 'balance')
            .addSelect('pool_member.accumulatedRewards', 'accumulatedRewards')
            .addSelect('pool_member.id', 'memberId')
            .where('pool_member.account = :accountId', { accountId })
            .getRawMany()

        const memberIds = poolData.map((pool) => pool.memberId)

        if (memberIds.length === 0) {
            return {
                pools: [],
                rewards: [],
            }
        }

        const rewardsQueryBuilder = manager
            .getRepository(PoolMemberRewards)
            .createQueryBuilder('pmr')
            .innerJoin('pmr.reward', 'era_reward')
            .innerJoin('era_reward.era', 'era')
            .select('era.index', 'era')
            .addSelect('era.startAt', 'eraStartAt')
            .addSelect('AVG(era_reward.apy)', 'apy')
            .addSelect('AVG(era_reward.averageApy)', 'averageApy')
            .addSelect('SUM(pmr.points)', 'totalPoints')
            .addSelect('SUM(pmr.rewards)', 'totalRewards')
            .addSelect('SUM(SUM(pmr.rewards)) OVER (ORDER BY era.index ASC)', 'totalAccumulatedRewards')
            .where('pmr.member IN (:...memberIds)', { memberIds })

        if (timeFrame !== StakingTimeframeInput.ALL) {
            if (timeFrame === StakingTimeframeInput.YTD) {
                rewardsQueryBuilder.andWhere(`era.startAt >= DATE_TRUNC('year', NOW())`)
            } else {
                rewardsQueryBuilder.andWhere(`era.startAt >= NOW() - INTERVAL '${stakingTimeFrameMap[timeFrame]}'`)
            }
        }

        const rewardsData = await rewardsQueryBuilder
            .groupBy('era.index')
            .addGroupBy('era.startAt')
            .orderBy('era.index', 'ASC')
            .getRawMany()

        const rewards: PoolMemberReward[] = rewardsData.map((reward) => ({
            id: `era-${reward.era}`,
            points: BigInt(reward.totalPoints || '0'),
            era: reward.era,
            eraStartAt: reward.eraStartAt,
            apy: reward.apy,
            averageApy: reward.averageApy,
            rewards: reward.totalRewards,
            accumulatedRewards: reward.totalAccumulatedRewards,
        }))

        const pools = poolData.map(
            (pool) =>
                new NominationPoolSummary({
                    id: pool.id,
                    name: pool.name,
                    capacity: BigInt(pool.capacity),
                    apy: pool.apy,
                    rate: BigInt(pool.rate),
                    balance: BigInt(pool.balance),
                    accumulatedRewards: BigInt(pool.accumulatedRewards || '0'),
                })
        )

        return {
            pools,
            rewards,
        }
    }
}
