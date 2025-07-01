import { Field, ObjectType, Query, Resolver, Args, ArgsType } from 'type-graphql'
import { BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { TokenAccount, Token, Collection } from '~/model'
import { isValidAddress } from '~/util/tools'

@ValidatorConstraint({ name: 'PublicKeyArray', async: false })
export class IsPublicKeyArray implements ValidatorConstraintInterface {
    validate(value: string[]) {
        if (!Array.isArray(value)) return false
        return value.every((address) => isValidAddress(address))
    }

    defaultMessage() {
        return 'One or more invalid public keys in the array!'
    }
}

@ArgsType()
class AccountsNftSummaryArgs {
    @Field(() => [String])
    @Validate(IsPublicKeyArray)
    accountIds!: string[]
}

@ObjectType()
export class AccountsNftSummaryResponse {
    @Field(() => BigInteger)
    totalInfused!: typeof BigInteger

    @Field(() => BigInteger)
    estimatedTotalFloor!: typeof BigInteger

    constructor(props: Partial<AccountsNftSummaryResponse>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class AccountsNftSummaryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => AccountsNftSummaryResponse)
    async accountsNftSummary(@Args() { accountIds }: AccountsNftSummaryArgs): Promise<AccountsNftSummaryResponse> {
        const manager = await this.tx()

        // Get total infused amount
        const infusedResult = await manager
            .getRepository(TokenAccount)
            .createQueryBuilder('token_account')
            .innerJoin(Token, 'token', 'token_account.token = token.id')
            .select('SUM(token.infusion * token_account.balance)', 'totalInfused')
            .where('token_account.account IN (:...accountIds)', { accountIds })
            .getRawOne()

        const totalInfused = BigInt(infusedResult?.totalInfused || 0)

        // Get estimated total floor value
        // First, get the sum of balances per collection for the given accounts
        const collectionBalances = await manager
            .getRepository(TokenAccount)
            .createQueryBuilder('token_account')
            .innerJoin(Token, 'token', 'token_account.token = token.id')
            .innerJoin(Collection, 'collection', 'token.collection = collection.id')
            .select('collection.id', 'collectionId')
            .addSelect("collection.stats->>'floorPrice'", 'floorPrice')
            .addSelect('SUM(token_account.balance)', 'totalBalance')
            .where('token_account.account IN (:...accountIds)', { accountIds })
            .groupBy('collection.id')
            .addGroupBy("collection.stats->>'floorPrice'")
            .getRawMany()

        // Calculate estimated total floor
        let estimatedTotalFloor = 0n
        for (const row of collectionBalances) {
            if (row.floorPrice) {
                const floorPrice = BigInt(row.floorPrice)
                const balance = BigInt(row.totalBalance)
                estimatedTotalFloor += floorPrice * balance
            }
        }

        return new AccountsNftSummaryResponse({
            totalInfused: totalInfused as any,
            estimatedTotalFloor: estimatedTotalFloor as any,
        })
    }
}
