import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '../utils/rpc'

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
        const api = Rpc.getInstance().client.getUnsafeApi()
        const res: number = await api.query.Claims.AccountNonce.getValue(account)

        return {
            nonce: res.toString(),
        }
    }
}
