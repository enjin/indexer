import { hexToString } from '@polkadot/util'
import { Attribute, Event as EventModel, TokenGroup } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { safeString } from '~/util/tools'

export async function tokenGroupAttributeSet(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenGroupAttributeSet(item)

    if (skipSave) return mappings.multiTokens.events.tokenGroupAttributeSetEventModel(item, data)

    const key = safeString(hexToString(data.key))
    const value = safeString(hexToString(data.value))
    const attributeId = `${data.tokenGroupId.toString()}-${data.key}`

    const [attribute, tokenGroup] = await Promise.all([
        ctx.store.findOne<Attribute>(Attribute, {
            where: { id: attributeId },
        }),
        ctx.store.findOneOrFail<TokenGroup>(TokenGroup, {
            where: { id: data.tokenGroupId.toString() },
            relations: {
                collection: true,
            },
        }),
    ])

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(attribute)
    } else {
        const newAttribute = new Attribute({
            id: attributeId,
            key,
            value,
            deposit: 0n, // TODO: Change fixed for now
            tokenGroup: tokenGroup,
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(newAttribute)
    }

    return mappings.multiTokens.events.tokenGroupAttributeSetEventModel(item, data)
}
