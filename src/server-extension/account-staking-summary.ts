import { Field, ObjectType, Query, Resolver, Args, ArgsType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { PoolMember, NominationPool, TokenAccount } from '~/model'
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
export class NominationPoolSummary {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => BigInt)
    bonded!: BigInt

    @Field(() => BigInt)
    accumulatedRewards!: BigInt

    @Field(() => BigInt)
    apy!: BigInt

    @Field(() => BigInt)
    balance!: BigInt

    @Field(() => BigInt)
    rate!: BigInt

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

        // Get joined pools
        const joinedPools = await manager
            .getRepository(NominationPool)
            .createQueryBuilder('pool')
            .innerJoin(PoolMember, 'pool_member', 'pool.id = pool_member.pool')
            .innerJoin(TokenAccount, 'token_account', 'token_account.id = pool_member.token_account_id')
            .select('pool.id', 'id')
            .addSelect('pool.name', 'name')
            .addSelect('pool.apy', 'apy')
            .addSelect('pool.rate', 'rate')
            .addSelect('token_account.balance', 'balance')
            .addSelect('pool_member.bonded', 'bonded')
            .addSelect('pool_member.accumulatedRewards', 'accumulatedRewards')
            .where('pool_member.account = :accountId', { accountId })
            .getRawMany()

        return joinedPools.map((pool) => new NominationPoolSummary(pool))
    }
}
