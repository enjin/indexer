import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queues'

@Resolver()
export class SyncMetadataResolver {
    @Query(() => Boolean)
    syncMetadata(): boolean {
        QueueUtils.dispatchSyncAllMetadata()

        return true
    }
}
