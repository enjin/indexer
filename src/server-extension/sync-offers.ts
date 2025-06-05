import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queue'

@Resolver()
export class SyncOffersResolver {
    @Query(() => Boolean)
    syncOffers(): boolean {
        QueueUtils.dispatchSyncOffers()

        return true
    }
}
