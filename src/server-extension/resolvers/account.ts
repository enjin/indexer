import { Field, ObjectType, Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { AccountInfo as AccInfo } from '@polkadot/types/interfaces'
import config from '../../config'

@ObjectType()
export class Balance {
    @Field(() => BigInt, { nullable: false })
    free!: bigint

    @Field(() => BigInt, { nullable: false })
    reserved!: bigint

    @Field(() => BigInt, { nullable: false })
    miscFrozen!: bigint

    @Field(() => BigInt, { nullable: false })
    feeFrozen!: bigint

    constructor(props: Partial<Balance>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class AccountInfo {
    @Field(() => Number, { nullable: false })
    nonce!: number | null

    @Field(() => Balance, { nullable: false })
    balance!: Balance

    constructor(props?: Partial<AccountInfo>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class AccountInfoResolver {
    @Query(() => AccountInfo)
    async accountInfo(@Arg('address') address: string): Promise<AccountInfo> {
        const wsProvider = new WsProvider(config.rpc)
        const api = await ApiPromise.create({ provider: wsProvider })
        const account = await api.query.system.account<AccInfo>(address)

        return new AccountInfo({
            nonce: account.nonce.toNumber(),
            balance: new Balance({
                free: account.data.free.toBigInt(),
                reserved: account.data.reserved.toBigInt(),
                miscFrozen: account.data.miscFrozen.toBigInt(),
                feeFrozen: account.data.feeFrozen.toBigInt(),
            }),
        })
    }
}
