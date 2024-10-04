/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { deleteTokenTraits } from '../../jobs/delete-traits'

@Resolver()
export class DeleteTokenTraitsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async deleteTokenTraits(
        @Arg('tokenId', {
            description: 'token id e.g. 2100-17',
        })
        tokenId: string
    ): Promise<boolean> {
        await deleteTokenTraits(tokenId)

        return true
    }
}
