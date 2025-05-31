import { Query, Resolver, Arg, ArgsType, Field, Args } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queues'
import { decodeAddress } from '../utils/tools'

@ArgsType()
export class RefreshAccountsArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshAccountsResolver {
    @Query(() => Boolean)
    refreshAccounts(@Args() args: RefreshAccountsArgs): boolean {
        if (args.ids.length > 100) {
            throw new Error('Too many accounts to refresh, limit is 100')
        }

        const publicKeys = args.ids.map((id) => {
            return decodeAddress(id)
        })

        QueueUtils.dispatchFetchAccounts(publicKeys)

        return true
    }
}
