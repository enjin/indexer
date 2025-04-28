import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { fetchInfusion } from '../../jobs/fetch-infusion'

@Resolver()
export class RefreshInfusionResolver {
    @Query(() => Boolean)
    async refreshInfusion(
        @Arg('tokenId', {
            description: 'The token id to be refreshed',
        })
        token: string
    ): Promise<boolean> {
        await fetchInfusion(token)

        return true
    }
}
