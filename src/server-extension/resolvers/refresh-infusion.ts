import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import Rpc from '../../common/rpc'
import type { EntityManager } from 'typeorm'
import { Token } from '../../model'

@Resolver()
export class RefreshInfusionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async refreshInfusion(
        @Arg('tokenId', {
            description: 'The token id to be refreshed',
        })
        token: string
    ): Promise<boolean> {
        const manager = await this.tx()
        const { api } = await Rpc.getInstance()

        const collectionId = token.split('-')[0]
        const tokenId = token.split('-')[1]

        const res = await api.query.multiTokens.tokens(collectionId, tokenId)
        const infusion = res.unwrapOrDefault().infusion ?? '0'

        await manager.getRepository(Token).query(`UPDATE token SET infusion = '${infusion}' WHERE id = '${token}'`)

        return true
    }
}
