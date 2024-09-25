/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'

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
        const manager = await this.tx()

        await manager.query(
            `
            DELETE FROM trait_token WHERE token_id = $1
        `,
            [tokenId]
        )

        await manager.query(
            `
            DELETE FROM token_rarity WHERE token_id = $1
        `,
            [tokenId]
        )

        return true
    }
}
