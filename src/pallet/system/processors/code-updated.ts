import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic } from '~/model'
import { SnsEvent } from '~/util/sns'
import { shouldIndexExtrinsic } from '~/util/extrinsic-indexing'

export function codeUpdated(block: Block, item: EventItem, skipSave: boolean): [EventModel, SnsEvent | undefined] {
    const extrinsic = item.extrinsic
    const event = new EventModel({
        id: item.id,
        name: item.name,
        extrinsic: extrinsic?.id && shouldIndexExtrinsic(extrinsic) ? new Extrinsic({ id: extrinsic.id }) : null,
    })

    if (skipSave) {
        return [event, undefined]
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            blockNumber: block.height,
            specVersion: block.specVersion,
        },
    }

    return [event, snsEvent]
}
