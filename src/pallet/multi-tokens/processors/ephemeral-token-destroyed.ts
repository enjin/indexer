import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { SnsEvent } from '~/util/sns'

export function ephemeralTokenDestroyed(
    _ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): EventHandlerResult {
    const data = mappings.multiTokens.events.ephemeralTokenDestroyed(item)
    const event = mappings.multiTokens.events.ephemeralTokenDestroyedEventModel(item, block.height, data)
    if (skipSave) return event

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            expiration: data.expiration,
            observedBlock: block.height,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [event, snsEvent]
}
