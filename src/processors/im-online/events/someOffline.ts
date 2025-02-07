import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Event as EventModel, Extrinsic, ImOnlineSomeOffline } from '../../../model'

function getEventData(event: EventItem) {
    if (events.imOnline.someOffline.enjinV100.is(event)) {
        return events.imOnline.someOffline.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.imOnline.someOffline.name)
}

export async function someOffline(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

    return new EventModel({
        id: item.id,
        name: ImOnlineSomeOffline.name,
        data: new ImOnlineSomeOffline({
            validators: eventData.offline.map((v) => v[0]),
        }),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
    })
}
