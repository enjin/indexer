import { EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'

export async function held(item: EventItem): Promise<undefined> {
    const { who } = mappings.balances.events.held(item)
    await QueueUtils.dispatchFetchAccountBalance(who)
    return undefined
}
