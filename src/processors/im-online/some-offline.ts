import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, Extrinsic, ImOnlineSomeOffline } from '../../model'
import * as mappings from '../../mappings'

export function someOffline(ctx: CommonContext, block: BlockHeader, item: EventItem): EventModel | undefined {
    const event = mappings.imOnline.events.someOffline(item)

    return new EventModel({
        id: item.id,
        name: ImOnlineSomeOffline.name,
        data: new ImOnlineSomeOffline({
            validators: event.offline.map((v) => v[0]),
        }),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
    })
}
