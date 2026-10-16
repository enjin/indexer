import { Block, CommonContext, EventItem } from '~/contexts'
import { Token } from '~/model'
import * as mappings from '~/pallet/index'
import { replaceTokenGroupTokens } from '~/pallet/multi-tokens/processors/token-group-memberships'
import { EventHandlerResult } from '~/processor.handler'
import { QueueUtils } from '~/queue'

export async function tokenGroupUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenGroupUpdated(item)
    if (skipSave) return mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data)

    const token = await ctx.store.findOne(Token, {
        where: {
            id: `${data.collectionId.toString()}-${data.tokenId.toString()}`,
        },
    })

    if (!token) {
        return [mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data), undefined]
    }

    await replaceTokenGroupTokens(
        ctx,
        token,
        data.tokenGroups.map((tokenGroupId) => tokenGroupId.toString())
    )

    await QueueUtils.dispatchComputeMetadata({ id: token.id, type: 'token', force: false })

    return mappings.multiTokens.events.tokenGroupUpdatedEventModel(item, data)
}
