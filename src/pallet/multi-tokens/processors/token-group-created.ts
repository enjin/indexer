import { Block, CommonContext, EventItem } from '~/contexts'
import { Collection, TokenGroup } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenGroupCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupCreated(item)

    const collection = await ctx.store.findOneOrFail(Collection, {
        where: {
            id: data.collectionId.toString(),
        },
    })

    const tokenGroup = new TokenGroup({
        id: data.tokenGroupId.toString(),
        collection,
        attributes: [],
        tokenGroupTokens: [],
    })

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!collection.tokenGroups) collection.tokenGroups = []

    collection.tokenGroups.push(tokenGroup)

    await ctx.store.save(tokenGroup)
    await ctx.store.save(collection)

    return mappings.multiTokens.events.tokenGroupCreatedEventModel(item, data)
}
