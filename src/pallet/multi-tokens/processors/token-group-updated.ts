import { In } from 'typeorm'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Token, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupUpdated(item)

    const tokenGroupIds = data.tokenGroups.map((tokenGroupId) => tokenGroupId.toString())

    const [tokenGroup, token] = await Promise.all([
        ctx.store.findOneOrFail(TokenGroup, {
            where: {
                id: In(tokenGroupIds),
            },
        }),
        ctx.store.findOneOrFail(Token, {
            where: {
                id: `${data.collectionId.toString()}-${data.tokenId.toString()}`,
            },
            relations: {
                tokenGroupTokens: {
                    tokenGroup: true,
                },
            },
        }),
    ])

    const existingIds = token.tokenGroupTokens.map((tokenGroupToken) => tokenGroupToken.tokenGroup.id)

    const tokenGroupTokens = tokenGroupIds
        .filter((tokenGroupId) => !existingIds.includes(tokenGroupId))
        .map((tokenGroupId) => {
            return new TokenGroupToken({
                id: `${data.tokenId.toString()}-${tokenGroupId}`,
                token,
                tokenGroup,
            })
        })

    await ctx.store.save(tokenGroupTokens)

    const newTokenGroupTokensOrder = []
    const existingTokenGroupTokensOrder = [...token.tokenGroupTokens, ...tokenGroupTokens]
    for (const tokenGroupId of tokenGroupIds) {
        newTokenGroupTokensOrder.push(
            existingTokenGroupTokensOrder.find((tokenGroupToken) => tokenGroupToken.tokenGroup.id === tokenGroupId)
        )
    }
    token.tokenGroupTokens = newTokenGroupTokensOrder.filter((tokenGroupToken) => tokenGroupToken !== undefined)

    await ctx.store.save(token)

    return mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data)
}
