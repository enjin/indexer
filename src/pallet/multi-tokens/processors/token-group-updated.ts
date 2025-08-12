import { In } from 'typeorm'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, Token, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'

export async function tokenGroupUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
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
        }),
    ])

    const tokenGroupTokens = tokenGroupIds.map((tokenGroupId) => {
        return new TokenGroupToken({
            id: `${data.tokenId.toString()}-${tokenGroupId}`,
            token,
            tokenGroup,
        })
    })

    await ctx.store.save(tokenGroupTokens)

    return mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data)
}
