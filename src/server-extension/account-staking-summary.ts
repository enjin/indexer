import { Field, ObjectType, Query, Resolver, Args, ArgsType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { PoolMember, NominationPool, TokenAccount, EraReward, PoolMemberRewards } from '~/model'
import { isValidAddress } from '~/util/tools'

@ValidatorConstraint({ name: 'PublicKey', async: false })
export class IsPublicKey implements ValidatorConstraintInterface {
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

    @Field(() => String)
    bonus!: string
}

@ObjectType()
export class NominationPoolSummary {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => BigInt)
    bonded!: BigInt

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
        @Args() { accountId }: AccountStakingSummaryArgs
    ): Promise<NominationPoolSummaryResponse> {
        const manager = await this.tx()

        const thirtyDaysAgo = new Date()
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

        const poolData = await manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .innerJoin(PoolMember, 'pool_member', 'pool.id = pool_member.pool')
            .innerJoin(TokenAccount, 'token_account', 'token_account.id = pool_member.token_account_id')
            .select('pool.id', 'id')
            .addSelect('pool.name', 'name')
            .addSelect('pool.capacity', 'capacity')
            .addSelect('pool.apy', 'apy')
            .addSelect('pool.rate', 'rate')
            .addSelect('token_account.balance', 'balance')
            .addSelect('pool_member.bonded', 'bonded')
            .addSelect('pool_member.accumulatedRewards', 'accumulatedRewards')
            .addSelect('pool_member.id', 'memberId')
            .where('pool_member.account = :accountId', { accountId })
            .getRawMany()

        const memberIds = poolData.map((pool) => pool.memberId)

        const rewardsData = await manager
            .getRepository(PoolMemberRewards)
            .createQueryBuilder('pmr')
            .innerJoin('pmr.reward', 'era_reward')
            .innerJoin('era_reward.era', 'era')
            .select('era.index', 'era')
            .addSelect('era.startAt', 'eraStartAt')
            .addSelect('AVG(era_reward.apy)', 'apy')
            .addSelect('AVG(era_reward.changeInRate)', 'changeInRate')
            .addSelect('SUM(pmr.points)', 'totalPoints')
            .addSelect('SUM(pmr.points * (era_reward.changeInRate / 1000000000000000000))', 'totalBonus')
            .addSelect('COUNT(pmr.id)', 'rewardCount')
            .where('pmr.member IN (:...memberIds)', { memberIds })
            .andWhere('era.startAt >= :thirtyDaysAgo', { thirtyDaysAgo })
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
            bonus: reward.totalBonus,
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
                    bonded: BigInt(pool.bonded),
                    accumulatedRewards: BigInt(pool.accumulatedRewards || '0'),
                })
        )

        return {
            pools,
            rewards,
        }
    }
}
