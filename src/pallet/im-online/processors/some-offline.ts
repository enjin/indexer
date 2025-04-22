import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, Extrinsic, ImOnlineSomeOffline } from '../../../model'
import * as mappings from '../../index'

export function someOffline(ctx: CommonContext, block: Block, item: EventItem): EventModel | undefined {
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
