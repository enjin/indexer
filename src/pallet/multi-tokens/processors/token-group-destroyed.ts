import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, TokenGroup } from '~/model'
import * as mappings from '~/pallet/index'

export async function tokenGroupDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenGroupDestroyed(item)

    const tokenGroup = await ctx.store.findOneOrFail(TokenGroup, {
        where: {
            id: data.tokenGroupId.toString(),
        },
        relations: {
            tokenGroupTokens: {
                token: true,
            },
        },
    })

    if (!tokenGroup.tokenGroupTokens) {
        tokenGroup.tokenGroupTokens = []
    }

    tokenGroup.tokenGroupTokens.map(async (tokenGroupToken) => {
        const token = tokenGroupToken.token
        token.tokenGroupTokens = token.tokenGroupTokens.filter((groupToken) => groupToken.id !== tokenGroupToken.id)
        await ctx.store.save(token)
        await ctx.store.remove(tokenGroupToken)

        return tokenGroupToken
    })

    await ctx.store.remove(tokenGroup)

    return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)
}
