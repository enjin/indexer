import { Arg, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { type EntityManager } from 'typeorm'
import { QueueUtils } from '../queue'

@Resolver()
export class RefreshPoolResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async refreshPool(@Arg('id', () => String) id: string): Promise<boolean> {
        QueueUtils.dispatchRefreshPool(id)

        return true
    }
}
