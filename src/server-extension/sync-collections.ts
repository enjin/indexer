import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'

@Resolver()
export class SyncCollectionsResolver {
    @Query(() => Boolean)
    async syncCollections(): Promise<boolean> {
        QueueUtils.dispatchComputeCollections()

        return true
    }
}
