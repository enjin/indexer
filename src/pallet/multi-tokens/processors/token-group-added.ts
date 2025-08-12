import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, Token, TokenAccount, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'

export async function tokenGroupAdded(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
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
        }),
    ])

    if (!token.tokenGroupTokens) {
        token.tokenGroupTokens = []
    }

    if (!tokenGroup.tokenGroupTokens) {
        tokenGroup.tokenGroupTokens = []
    }

    const tokenGroupToken = new TokenGroupToken({
        id: `${data.tokenId.toString()}-${data.tokenGroupId.toString()}`,
        token,
        tokenGroup,
    })

    await ctx.store.save(tokenGroupToken)

    token.tokenGroupTokens.push(tokenGroupToken)
    tokenGroup.tokenGroupTokens.push(tokenGroupToken)

    await ctx.store.save(token)
    await ctx.store.save(tokenGroup)

    return mappings.multiTokens.events.tokenGroupAddedEventModel(item, data)
}
