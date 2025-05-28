import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queue'

@Resolver()
export class SyncMetadataResolver {
    @Query(() => Boolean)
    async syncMetadata(): Promise<boolean> {
        QueueUtils.dispatchSyncAllMetadata()

        return true
    }
}
