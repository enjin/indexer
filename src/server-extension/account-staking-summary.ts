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

    @Field(() => BigInt)
    changeInRate!: BigInt
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

    @Field(() => [PoolMemberReward])
    rewards!: PoolMemberReward[]

    constructor(props: Partial<NominationPoolSummary>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class AccountStakingSummaryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [NominationPoolSummary])
    async accountStakingSummary(@Args() { accountId }: AccountStakingSummaryArgs): Promise<NominationPoolSummary[]> {
        const manager = await this.tx()

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
            .addSelect('pmr.points', 'points')
            .addSelect('era.index', 'era')
            .addSelect('era_reward.changeInRate', 'changeInRate')
            .addSelect('pmr.member', 'memberId')
            .where('pmr.member IN (:...memberIds)', { memberIds })
            .orderBy('era.index', 'ASC')
            .getRawMany()

        const rewardsByMember = rewardsData.reduce(
            (acc, reward) => {
                if (!acc[reward.memberId]) {
                    acc[reward.memberId] = []
                }
                acc[reward.memberId].push({
                    id: reward.id,
                    points: BigInt(reward.points),
                    era: reward.era,
                    changeInRate: BigInt(reward.changeInRate),
                })
                return acc
            },
            {} as Record<string, PoolMemberReward[]>
        )

        return poolData.map(
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
                    rewards: rewardsByMember[pool.memberId] || [],
                })
        )
    }
}
