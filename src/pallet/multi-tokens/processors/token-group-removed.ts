import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, Token, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'

export async function tokenGroupRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
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

    if (!token.tokenGroupTokens) {
        token.tokenGroupTokens = []
    }

    if (!tokenGroup.tokenGroupTokens) {
        tokenGroup.tokenGroupTokens = []
    }

    token.tokenGroupTokens = token.tokenGroupTokens.filter((groupToken) => groupToken.id !== tokenGroupToken.id)
    tokenGroup.tokenGroupTokens = tokenGroup.tokenGroupTokens.filter(
        (groupToken) => groupToken.id !== tokenGroupToken.id
    )

    await ctx.store.save([token, tokenGroup])
    await ctx.store.remove(tokenGroupToken)

    return mappings.multiTokens.events.tokenGroupRemovedEventModel(item, data)
}
