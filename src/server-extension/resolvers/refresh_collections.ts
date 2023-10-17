import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { fetchCollectionExtra } from '../../jobs/fetch-collection-extra'

@Resolver()
export class RefreshCollectionsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshCollections(@Arg('ids', () => [String], { defaultValue: [] }) ids: string[]): Promise<boolean> {
        if (ids.length === 0) {
            return false
        }

        if (ids.length > 100) {
            throw new Error('Too many collections to fetch')
        }

        await fetchCollectionExtra(ids)

        return true
    }
}
