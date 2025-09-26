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

    const promises = []
    for (const tokenGroupToken of token.tokenGroupTokens) {
        ctx.log.info(`[TokenGroupUpdated] Removing token group token ${tokenGroupToken.id}`)
        promises.push(ctx.store.remove(tokenGroupToken))
    }
    await Promise.all(promises)

    const tokenGroupTokens = tokenGroupIds.map((tokenGroupId) => {
        return new TokenGroupToken({
            id: `${data.tokenId.toString()}-${tokenGroupId}`,
            token,
            tokenGroup,
        })
    })

    token.tokenGroupTokens = tokenGroupTokens
    await ctx.store.save(token)

    return mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data)
}
