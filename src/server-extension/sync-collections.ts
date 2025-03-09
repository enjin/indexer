import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../worker/queue'

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

        QueueUtils.dispatchComputeCollections()

        return true
    }
}
