import { Query, Resolver, Arg, ArgsType, Field, Args } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '../queue'

@ArgsType()
export class RefreshListingsArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class RefreshListingsResolver {
    @Query(() => Boolean, { nullable: false })
    refreshListings(@Args() args: RefreshListingsArgs): boolean {
        if (args.ids.length > 100) {
            throw new Error('Too many listings to refresh, limit is 100')
        }

        QueueUtils.dispatchRefreshListings(args.ids)

        return true
    }
}
