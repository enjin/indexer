import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, UtilityBatchInterrupted } from '~/model'
import { readableDispatchError } from '~/util/dispatch-error'

export function batchInterrupted(block: Block, item: EventItem): EventModel | undefined {
    // Unlike ItemFailed, this event carries the failing item's index in its own args.
    const args = item.args as { index?: number; error?: unknown } | undefined

    return new EventModel({
        id: item.id,
        name: 'UtilityBatchInterrupted',
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new UtilityBatchInterrupted({
            error: readableDispatchError(args?.error, block._runtime),
            itemIndex: typeof args?.index === 'number' ? args.index : null,
        }),
    })
}
