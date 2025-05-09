import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queue'
import { decodeAddress } from '../util/tools'

@Resolver()
export class RefreshAccountsResolver {
    @Query(() => Boolean)
    refreshAccounts(@Arg('ids', () => [String]) ids: string[]): boolean {
        if (ids.length > 100) {
            throw new Error('Too many accounts to refresh, limit is 100')
        }

        const publicKeys = ids.map((id) => {
            return decodeAddress(id)
        })

        QueueUtils.dispatchFetchAccounts(publicKeys)

        return true
    }
}
