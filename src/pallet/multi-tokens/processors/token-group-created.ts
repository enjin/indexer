import { Block, CommonContext, EventItem } from '~/contexts'
import { Collection, Event as EventModel, TokenGroup } from '~/model'
import * as mappings from '~/pallet/index'

export async function tokenGroupCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenGroupCreated(item)

    const collection = await ctx.store.findOneOrFail(Collection, {
        where: {
            id: data.collectionId.toString(),
        },
    })

    const tokenGroup = new TokenGroup({
        id: data.tokenGroupId.toString(),
        collection,
    })

    if (!collection.tokenGroups) {
        collection.tokenGroups = []
    }

    collection.tokenGroups.push(tokenGroup)

    await ctx.store.save(tokenGroup)
    await ctx.store.save(collection)

    return mappings.multiTokens.events.tokenGroupCreatedEventModel(item, data)
}
