import { Block, CommonContext, EventItem } from '~/contexts'
import { Token, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupAdded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupAdded(item)

    const [tokenGroup, token] = await Promise.all([
        ctx.store.findOneOrFail(TokenGroup, {
            where: {
                id: data.tokenGroupId.toString(),
            },
        }),
        ctx.store.findOneOrFail(Token, {
            where: {
                id: `${data.collectionId.toString()}-${data.tokenId.toString()}`,
            },
            relations: {
                tokenGroupTokens: true,
            },
        }),
    ])

    const tokenGroupToken = new TokenGroupToken({
        id: `${data.tokenId.toString()}-${token.tokenGroupTokens.length - 1}-${data.tokenGroupId.toString()}`,
        token,
        tokenGroup,
    })

    await ctx.store.save(tokenGroupToken)

    return mappings.multiTokens.events.tokenGroupAddedEventModel(item, data)
}
