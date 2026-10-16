import { Event as EventModel } from '~/model'
import { EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

export function protocolFeeSet(item: EventItem): EventModel {
    const data = mappings.marketplace.events.protocolFeeSet(item)
    return mappings.marketplace.events.protocolFeeSetEventModel(item, data)
}
