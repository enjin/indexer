import { Args, ArgsType, Field, Mutation, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'
import { encodeAddress, isValidAddress } from '~/util/tools'

@ArgsType()
export class RefreshAccountsArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshAccountsResolver {
    @Mutation(() => Boolean)
    refreshAccounts(@Args() args: RefreshAccountsArgs): boolean {
        if (args.ids.length > 100) {
            throw new Error('Too many accounts to refresh, limit is 100')
        }

        const publicKeys = args.ids.map((id) => {
            return isValidAddress(id) ? id : encodeAddress(id)
        })

        QueueUtils.dispatchFetchAccounts(publicKeys)

        return true
    }
}
