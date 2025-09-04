import { Query, Resolver, Arg, ArgsType, Field, Args, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'
import { decodeAddress } from '~/util/tools'

export enum EntityType {
    COLLECTION_EXTRA = 'collection_extra',
    COLLECTION_STATS = 'collection_stats',
    TOKEN = 'token',
    TOKEN_TRAITS = 'token_traits',
    ACCOUNT = 'account',
    ACCOUNT_BALANCES = 'account_balances',
    LISTING = 'listing',
    OFFER = 'offer',
    POOL = 'pool',
    SYNC_COLLECTIONS = 'sync_collections',
    SYNC_ACCOUNTS = 'sync_accounts',
    SYNC_BALANCES = 'sync_balances',
    SYNC_OFFERS = 'sync_offers',
    SYNC_VALIDATORS = 'sync_validators',
    SYNC_METADATA = 'sync_metadata',
}

registerEnumType(EntityType, {
    name: 'EntityType',
})

@ArgsType()
export class RefreshEntityArgs {
    @Field(() => EntityType)
    type!: EntityType

    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshEntityResolver {
    @Query(() => Boolean, { nullable: false })
    refreshEntity(@Args() args: RefreshEntityArgs): boolean {
        if (args.ids.length > 100) {
            throw new Error('Too many entities to refresh, limit is 100')
        }

        switch (args.type) {
            // Syncs
            case EntityType.SYNC_COLLECTIONS:
                QueueUtils.dispatchComputeCollections()
                break
            case EntityType.SYNC_ACCOUNTS:
                QueueUtils.dispatchSyncAccounts()
                break
            case EntityType.SYNC_BALANCES:
                QueueUtils.dispatchFetchAllBalances()
                break
            case EntityType.SYNC_OFFERS:
                QueueUtils.dispatchSyncOffers()
                break
            case EntityType.SYNC_VALIDATORS:
                QueueUtils.dispatchSyncValidators()
                break
            case EntityType.SYNC_METADATA:
                QueueUtils.dispatchSyncAllMetadata()
                break

            // Partial updates
            case EntityType.COLLECTION_EXTRA:
                QueueUtils.dispatchFetchExtra(args.ids)
                break
            case EntityType.COLLECTION_STATS:
                for (const id of args.ids) {
                    QueueUtils.dispatchComputeStats(id)
                }
                break
            case EntityType.POOL:
                for (const id of args.ids) {
                    QueueUtils.dispatchRefreshPool(id)
                }
                break
            case EntityType.TOKEN_TRAITS:
                for (const id of args.ids) {
                    QueueUtils.dispatchComputeTraits(id)
                }
                break
            case EntityType.ACCOUNT:
                ;(() => {
                    const publicKeys = args.ids.map((id) => {
                        return decodeAddress(id)
                    })
                    QueueUtils.dispatchFetchAccounts(publicKeys)
                })()

                break
            case EntityType.ACCOUNT_BALANCES:
                ;(() => {
                    const publicKeys = args.ids.map((id) => {
                        return decodeAddress(id)
                    })
                    QueueUtils.dispatchFetchBalances(publicKeys)
                })()
                break
            case EntityType.LISTING:
                QueueUtils.dispatchRefreshListings(args.ids)
                break
        }

        return true
    }
}
