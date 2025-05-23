import { Arg, Query, Resolver } from 'type-graphql'
import { QueueUtils } from '../queue'
import { decodeAddress } from '../util/tools'

@Resolver()
export class RefreshBalancesResolver {
    @Query(() => Boolean, { nullable: false })
    async refreshBalances(@Arg('ids', () => [String], { defaultValue: [] }) ids: string[]): Promise<boolean> {
        if (ids.length > 100) {
            throw new Error('Too many accounts to refresh, limit is 100')
        }

        const publicKeys = ids.map((id) => {
            return decodeAddress(id)
        })

        QueueUtils.dispatchFetchBalances(publicKeys)

        return true
    }
}
