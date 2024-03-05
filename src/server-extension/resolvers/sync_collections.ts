/* eslint-disable max-classes-per-file */
import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { syncAllCollections } from '../../jobs/collection-stats'

const mins10 = 1000 * 60 * 30
let rateLimit: number | null = null

@Resolver()
export class SyncCollectionsResolver {
    @Query(() => Boolean)
    async syncCollections(): Promise<boolean> {
        if (rateLimit) {
            const timeLeft = Math.ceil((rateLimit + mins10 - Date.now()) / 1000)

            if (timeLeft > 0) {
                return false
            }
        }

        rateLimit = Date.now()

        await syncAllCollections()

        return true
    }
}
