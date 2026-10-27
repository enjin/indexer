import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

// Not published on SNS: the Burned of the same destruction carries `cause: ephemeralExpiry` and the expiration
// block (see `~/util/sns-cause`).
export function ephemeralTokenDestroyed(_ctx: CommonContext, _block: Block, item: EventItem): EventHandlerResult {
    const data = mappings.multiTokens.events.ephemeralTokenDestroyed(item)
    return mappings.multiTokens.events.ephemeralTokenDestroyedEventModel(item, data)
}
