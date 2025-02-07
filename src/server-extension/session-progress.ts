import { Query, Resolver, ObjectType, Field, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '../common/rpc'

@ObjectType()
class SessionProgressResolverResult {
    @Field({ nullable: false })
    eraLength!: number

    constructor(props: Partial<SessionProgressResolverResult>) {
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
export class SessionProgressResolver {
    @Query(() => SessionProgressResolverResult)
    async sessionProgress(): Promise<SessionProgressResolverResult> {
        const { api } = await Rpc.getInstance()

        const res = await api.derive.session.progress()

        return {
            eraLength: res.eraLength.toNumber(),
        }
    }
}
