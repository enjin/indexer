import { Block, CommonContext, EventItem } from '~/contexts'
import { Token, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupRemoved(item)

    const [tokenGroupToken, tokenGroup, token] = await Promise.all([
        ctx.store.findOneOrFail(TokenGroupToken, {
            where: {
                id: `${data.tokenId.toString()}-${data.tokenGroupId.toString()}`,
            },
        }),
        ctx.store.findOneOrFail(TokenGroup, {
            where: {
                id: data.tokenGroupId.toString(),
            },
            relations: {
                tokenGroupTokens: true,
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

    token.tokenGroupTokens = token.tokenGroupTokens.filter((groupToken) => groupToken.id !== tokenGroupToken.id)
    tokenGroup.tokenGroupTokens = tokenGroup.tokenGroupTokens.filter(
        (groupToken) => groupToken.id !== tokenGroupToken.id
    )

    await ctx.store.save(token)
    await ctx.store.save(tokenGroup)
    await ctx.store.remove(tokenGroupToken)

    return mappings.multiTokens.events.tokenGroupRemovedEventModel(item, data)
}
