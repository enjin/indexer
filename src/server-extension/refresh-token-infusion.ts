import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '../util/rpc'

@Resolver()
export class RefreshTokenInfusionResolver {
    @Query(() => Boolean)
    async claimsAccountNonce(
        @Arg('tokenId', {
            description: 'The token id to be refreshed',
        })
        tokenId: string
    ): Promise<boolean> {
        const { api } = await Rpc.getInstance()
        const res = await api.query.multiTokens.tokens(['', ''])
        console.log(res)

        return true
    }
}
