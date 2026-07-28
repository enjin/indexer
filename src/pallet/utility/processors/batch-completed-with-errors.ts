import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic } from '~/model'

export function batchCompletedWithErrors(item: EventItem): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: 'UtilityBatchCompletedWithErrors',
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
    })
}
