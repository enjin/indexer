import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'

@Resolver()
export class SyncBalancesResolver {
    @Query(() => Boolean)
    async syncBalances(): Promise<boolean> {
        QueueUtils.dispatchFetchAllBalances()

        return true
    }
}
