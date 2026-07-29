import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, UtilityItemFailed } from '~/model'
import { events } from '~/type'
import { readableDispatchError } from '~/util/dispatch-error'

// Every batch item of a Utility batch emits exactly one ItemCompleted or ItemFailed event, in
// item order, so this failed item's zero-based position equals the number of sibling item
// events that precede it. Nested events dispatched by the items themselves never count.
export function deriveItemIndex(item: EventItem): number | null {
    const siblings = item.extrinsic?.events

    if (!siblings) {
        return null
    }

    return siblings.filter(
        (event) =>
            (event.name === events.utility.itemCompleted.name || event.name === events.utility.itemFailed.name) &&
            event.index < item.index
    ).length
}

export function itemFailed(block: Block, item: EventItem): EventModel | undefined {
    const error = (item.args as { error?: unknown } | undefined)?.error

    return new EventModel({
        id: item.id,
        name: 'UtilityItemFailed',
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new UtilityItemFailed({
            error: readableDispatchError(error, block._runtime),
            itemIndex: deriveItemIndex(item),
        }),
    })
}
