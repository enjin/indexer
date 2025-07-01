import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'

@Resolver()
export class SyncValidatorsResolver {
    @Query(() => Boolean)
    syncValidators(): boolean {
        QueueUtils.dispatchSyncValidators()

        return true
    }
}
