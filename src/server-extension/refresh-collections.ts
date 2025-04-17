import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queues'

@Resolver()
export class RefreshCollectionsResolver {
    @Query(() => Boolean, { nullable: false })
    refreshCollections(@Arg('ids', () => [String], { defaultValue: [] }) ids: string[]): boolean {
        if (ids.length > 100) {
            throw new Error('Too many collections to refresh, limit is 100')
        }

        QueueUtils.dispatchFetchCollectionExtra(ids)

        return true
    }
}
