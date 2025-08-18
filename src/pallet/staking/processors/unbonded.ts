import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { unbondedEventModel } from '../events'

export async function unbonded(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.unbonded(item)

    return unbondedEventModel(item, event)
}
