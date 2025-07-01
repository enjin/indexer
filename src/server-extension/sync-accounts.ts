import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'

@Resolver()
export class SyncAccountsResolver {
    @Query(() => Boolean)
    async syncAccounts(): Promise<boolean> {
        QueueUtils.dispatchSyncAccounts()

        return true
    }
}
