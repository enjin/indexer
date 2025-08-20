import { Attribute } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupAttributeRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupAttributeRemoved(item)

    if (skipSave) return mappings.multiTokens.events.tokenGroupAttributeRemovedEventModel(item, data)

    const attributeId = `${data.tokenGroupId.toString()}-${data.key}`
    const attribute = await ctx.store.findOneOrFail<Attribute>(Attribute, {
        where: { id: attributeId },
    })

    await ctx.store.remove(attribute)

    return mappings.multiTokens.events.tokenGroupAttributeRemovedEventModel(item, data)
}
