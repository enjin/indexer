import { Block, CommonContext, EventItem } from '~/contexts'
import { TokenGroup } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupDestroyed(item)

    const tokenGroup = await ctx.store.findOne(TokenGroup, {
        where: {
            id: data.tokenGroupId.toString(),
        },
    })

    if (!tokenGroup) {
        return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)
    }

    await ctx.store.remove(tokenGroup)

    return mappings.multiTokens.events.tokenGroupDestroyedEventModel(item, data)
}
