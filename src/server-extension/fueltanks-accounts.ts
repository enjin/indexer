import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '../util/rpc'
import { hexToU8a } from '@polkadot/util'

const customTypes = {
    UserFuelBudget: {
        amount: 'PalletFuelTanksBudget',
        userCount: 'Compact<u32>',
    },
}

@ObjectType()
class TankAccountUserFuelBudgetAmount {
    @Field({ nullable: false })
    amount!: string

    @Field({ nullable: false })
    resetPeriod!: number

    constructor(props: Partial<TankAccountUserFuelBudgetAmount>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class TankAccountUserFuelBudget {
    @Field({ nullable: false })
    amount!: TankAccountUserFuelBudgetAmount

    @Field({ nullable: false })
    userCount!: number

    constructor(props: Partial<TankAccountUserFuelBudget>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class FuelTanksAccountsResult {
    @Field({ nullable: false })
    tankDeposit!: string

    @Field({ nullable: false })
    userDeposit!: number

    @Field({ nullable: true })
    userFuelBudget?: TankAccountUserFuelBudget

    constructor(props: Partial<FuelTanksAccountsResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class FuelTanksAccountsResolver {
    @Query(() => FuelTanksAccountsResult, { nullable: true })
    async fuelTanksAccounts(
        @Arg('fuelTank', {
            description: 'address of fuelTank',
        })
        fuelTank: string,
        @Arg('account', {
            description: 'address of account',
        })
        account: string
    ): Promise<FuelTanksAccountsResult | null> {
        const { api } = await Rpc.getInstance()
        api.registerTypes(customTypes)

        const res = await api.query.fuelTanks.accounts(fuelTank, account)

        const resJson: any = res.toJSON()

        if (!resJson) {
            return null
        }

        let userFuelBudget: undefined | TankAccountUserFuelBudget

        if (resJson && resJson.ruleDataSets && resJson.ruleDataSets[0] && resJson.ruleDataSets[0].UserFuelBudget) {
            userFuelBudget = res.registry
                .createType('UserFuelBudget', hexToU8a(resJson.ruleDataSets[0].UserFuelBudget))
                .toJSON() as any
        }

        return {
            tankDeposit: resJson.tankDeposit,
            userDeposit: resJson.userDeposit,
            userFuelBudget,
        }
    }
}
