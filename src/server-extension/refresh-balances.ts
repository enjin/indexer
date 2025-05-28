import { Args, ArgsType, Field, Query, Resolver } from 'type-graphql'
import { QueueUtils } from '../queue'
import { decodeAddress } from '../util/tools'

@ArgsType()
export class RefreshBalancesArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshBalancesResolver {
    @Query(() => Boolean, { nullable: false })
    async refreshBalances(@Args() args: RefreshBalancesArgs): Promise<boolean> {
        if (args.ids.length > 100) {
            throw new Error('Too many accounts to refresh, limit is 100')
        }

        const publicKeys = args.ids.map((id) => {
            return decodeAddress(id)
        })

        QueueUtils.dispatchFetchBalances(publicKeys)

        return true
    }
}
