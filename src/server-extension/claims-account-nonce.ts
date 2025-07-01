import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '~/util/rpc'

@ObjectType()
export class ClaimsAccountNonceResult {
    @Field({ nullable: false })
    nonce!: string

    constructor(props: Partial<ClaimsAccountNonceResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class ClaimsAccountNonceResolver {
    @Query(() => ClaimsAccountNonceResult)
    async claimsAccountNonce(
        @Arg('account', {
            description: 'publicKey of the account',
        })
        account: string
    ): Promise<ClaimsAccountNonceResult> {
        const { api } = await Rpc.getInstance()
        const res = await api.query.claims.accountNonce(account)

        return {
            nonce: res.toString(),
        }
    }
}
