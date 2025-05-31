import { Query, Resolver, Arg, ArgsType, Field, Args } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queues'

@ArgsType()
export class RefreshCollectionsArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshCollectionsResolver {
    @Query(() => Boolean, { nullable: false })
    refreshCollections(@Args() args: RefreshCollectionsArgs): boolean {
        if (args.ids.length > 100) {
            throw new Error('Too many collections to refresh, limit is 100')
        }

        QueueUtils.dispatchFetchExtra(args.ids)

        return true
    }
}
