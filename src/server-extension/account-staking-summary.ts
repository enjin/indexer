import { Field, ObjectType, Query, Resolver, Args, ArgsType, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { PoolMember, NominationPool, TokenAccount, EraReward, PoolMemberRewards, PoolState, Token } from '~/model'
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
        if (!value) return true
        return isValidAddress(value)
    }

    defaultMessage() {
        return 'Invalid public key!'
    }
}

@ValidatorConstraint({ name: 'PublicKeyArray', async: false })
class IsPublicKeyArray implements ValidatorConstraintInterface {
    validate(value: string[]) {
        if (!value) return true
        if (!Array.isArray(value)) return false
        return value.every((v) => isValidAddress(v))
    }

    defaultMessage() {
        return 'Invalid public key array! All values must be valid addresses.'
    }
}

@ArgsType()
class AccountStakingSummaryArgs {
    @Field(() => String, { nullable: true })
    @Validate(IsPublicKey)
    accountId?: string

    @Field(() => [String], { nullable: true })
    @Validate(IsPublicKeyArray)
    accountIds?: string[]

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

    @Field(() => Date)
    eraEndAt!: Date

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
export class NominationPoolSummaryGlobal {
    @Field(() => BigInt)
    totalPools!: BigInt

    @Field(() => BigInt)
    totalSupply!: BigInt

    @Field(() => BigInt)
    totalStaked!: BigInt

    constructor(props: Partial<NominationPoolSummaryGlobal>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class NominationPoolSummaryResponse {
    @Field(() => [NominationPoolSummary])
    pools!: NominationPoolSummary[]

    @Field(() => [PoolMemberReward])
    rewards!: PoolMemberReward[]

    @Field(() => NominationPoolSummaryGlobal)
    global!: NominationPoolSummaryGlobal
}

@Resolver()
export class AccountStakingSummaryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => NominationPoolSummaryResponse)
    async accountStakingSummary(
        @Args() { accountId, accountIds, timeFrame }: AccountStakingSummaryArgs
    ): Promise<NominationPoolSummaryResponse> {
        const manager = await this.tx()

        // Merge accountId and accountIds into a single array
        let accounts: string[] = []
        if (accountId) {
            accounts.push(accountId)
        }
        if (accountIds && accountIds.length > 0) {
            accounts.push(...accountIds)
        }

        // Ensure we have at least one account (this is also validated at the Args level)
        if (accounts.length === 0) {
            throw new Error('Either accountId or accountIds must be provided')
        }

        // Remove duplicates
        accounts = [...new Set(accounts)]

        const globalQueryBuilder = manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .select('COUNT(pool.id)', 'totalPools')
            .addSelect('SUM(pool.points)', 'totalStaked')
            .where('pool.state != :state', { state: PoolState.Destroyed })

        const totalSupplyQueryBuilder = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .select('SUM(token.supply)', 'totalSupply')
            .where('token.id = :id', { id: '0-0' })

        const totalSupplyData = await totalSupplyQueryBuilder.getRawOne()

        const globalData = await globalQueryBuilder.getRawOne()
        const global = new NominationPoolSummaryGlobal({
            totalPools: BigInt(globalData.totalPools || '0'),
            totalStaked: BigInt(globalData.totalStaked || '0'),
            totalSupply: BigInt(totalSupplyData.totalSupply || '0'),
        })

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
            .where('pool_member.account IN (:...accounts)', { accounts: accounts })
            .getRawMany()

        const memberIds = poolData.map((pool) => pool.memberId)

        if (memberIds.length === 0) {
            return {
                pools: [],
                rewards: [],
                global,
            }
        }

        const rewardsQueryBuilder = manager
            .getRepository(PoolMemberRewards)
            .createQueryBuilder('pmr')
            .innerJoin('pmr.reward', 'era_reward')
            .innerJoin('era_reward.era', 'era')
            .select('era.index', 'era')
            .addSelect('era.startAt', 'eraStartAt')
            .addSelect('era.endAt', 'eraEndAt')
            .addSelect('AVG(era_reward.apy)', 'apy')
            .addSelect('AVG(era_reward.averageApy)', 'averageApy')
            .addSelect('SUM(pmr.points)', 'totalPoints')
            .addSelect('SUM(pmr.rewards)', 'totalRewards')
            .addSelect('SUM(SUM(pmr.rewards)) OVER (ORDER BY era.index ASC)', 'totalAccumulatedRewards')
            .where('pmr.member IN (:...memberIds)', { memberIds })
            .andWhere('era.endAt IS NOT NULL')

        if (timeFrame !== StakingTimeframeInput.ALL) {
            if (timeFrame === StakingTimeframeInput.YTD) {
                rewardsQueryBuilder.andWhere(`era.endAt >= DATE_TRUNC('year', NOW())`)
            } else {
                rewardsQueryBuilder.andWhere(`era.endAt >= NOW() - INTERVAL '${stakingTimeFrameMap[timeFrame]}'`)
            }
        }

        const rewardsData = await rewardsQueryBuilder
            .groupBy('era.index')
            .addGroupBy('era.startAt')
            .addGroupBy('era.endAt')
            .orderBy('era.index', 'ASC')
            .getRawMany()

        const rewards: PoolMemberReward[] = rewardsData.map((reward) => ({
            id: `era-${reward.era}`,
            points: BigInt(reward.totalPoints || '0'),
            era: reward.era,
            eraStartAt: reward.eraStartAt,
            eraEndAt: reward.eraEndAt,
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
            global,
        }
    }
}
