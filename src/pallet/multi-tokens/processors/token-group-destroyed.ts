import { Block, CommonContext, EventItem } from '~/contexts'
import { Attribute, TokenGroup, TokenGroupToken } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupDestroyed(item)
    if (skipSave) return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)

    const tokenGroup = await ctx.store.findOne(TokenGroup, {
        where: {
            id: data.tokenGroupId.toString(),
        },
    })

    if (!tokenGroup) {
        return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)
    }

    const [attributes, tokenGroupTokens] = await Promise.all([
        ctx.store.find(Attribute, { where: { tokenGroup: { id: tokenGroup.id } } }),
        ctx.store.find(TokenGroupToken, { where: { tokenGroup: { id: tokenGroup.id } } }),
    ])

    await ctx.store.remove(attributes)
    await ctx.store.remove(tokenGroupTokens)
    await ctx.store.remove(tokenGroup)

    return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)
}
