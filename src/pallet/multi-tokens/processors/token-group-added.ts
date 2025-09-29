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

    const exists = await ctx.store.findOne(TokenGroupToken, {
        where: {
            tokenGroup: {
                id: data.tokenGroupId.toString(),
            },
            token: {
                tokenId: data.tokenId,
            },
        },
    })

    if (exists) {
        return mappings.multiTokens.events.tokenGroupAddedEventModel(item, data)
    }

    const tokenGroupToken = new TokenGroupToken({
        id: `${data.tokenId.toString()}-${data.tokenGroupId.toString()}`,
        token,
        tokenGroup,
        position: token.tokenGroupTokens.length,
    })

    await ctx.store.save(tokenGroupToken)

    return mappings.multiTokens.events.tokenGroupAddedEventModel(item, data)
}
