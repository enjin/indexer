import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export function ephemeralCleanupFailed(_ctx: CommonContext, block: Block, item: EventItem): EventHandlerResult {
    const data = mappings.multiTokens.events.ephemeralCleanupFailed(item)
    return mappings.multiTokens.events.ephemeralCleanupFailedEventModel(item, block, data)
}
