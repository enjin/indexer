/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '../../config'

const wsProvider = new WsProvider(config.dataSource.chain)
const apiPromise = ApiPromise.create({ provider: wsProvider })

@ObjectType()
export class ClaimsAccountNonceResult {
    @Field({ nullable: false })
    nonce!: string

    constructor(props: Partial<ClaimsAccountNonceResult>) {
        Object.assign(this, props)
    }
}

enum AccountType {
    Substrate = 'Substrate',
    EVM = 'EVM',
}

registerEnumType(AccountType, {
    name: 'AccountType',
    description: 'account of either evm or substrate',
})

@Resolver()
export class ClaimsAccountNonceResolver {
    @Query(() => ClaimsAccountNonceResult)
    async claimsAccountNonce(
        @Arg('account', {
            description: 'publicKey of the account',
        })
        account: string
    ): Promise<ClaimsAccountNonceResult> {
        const api = await apiPromise

        const res = await api.query.claims.accountNonce(account)

        return {
            nonce: res.toString(),
        }
    }
}
