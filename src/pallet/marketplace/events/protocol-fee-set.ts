import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MarketplaceProtocolFeeSet } from '~/model'
import { ProtocolFeeSet } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function protocolFeeSet(event: EventItem): ProtocolFeeSet {
    if (!marketplace.protocolFeeSet.matrixEnjinV603.is(event)) throw new UnsupportedEventError(event)
    return marketplace.protocolFeeSet.matrixEnjinV603.decode(event)
}

export function protocolFeeSetEventModel(item: EventItem, data: ProtocolFeeSet): EventModel {
    return new EventModel({
        id: item.id,
        name: MarketplaceProtocolFeeSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MarketplaceProtocolFeeSet({ protocolFeePerbill: data.protocolFee }),
    })
}
