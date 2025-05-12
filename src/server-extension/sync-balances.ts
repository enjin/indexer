import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { QueueUtils } from '../queue'

@Resolver()
export class SyncBalancesResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async syncBalances(): Promise<boolean> {
        QueueUtils.dispatchFetchAllBalances()
        return true
    }
}
