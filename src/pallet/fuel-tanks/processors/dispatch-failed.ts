import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, FuelTankDispatchFailed } from '~/model'
import { readableDispatchError } from '~/util/dispatch-error'

export function dispatchFailed(block: Block, item: EventItem): EventModel | undefined {
    const error = (item.args as { error?: unknown } | undefined)?.error

    return new EventModel({
        id: item.id,
        name: 'FuelTankDispatchFailed',
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankDispatchFailed({
            error: readableDispatchError(error, block._runtime),
        }),
    })
}
