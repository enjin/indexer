import { Block, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MigrationsUpgradeCompleted } from '~/model'
import { SnsEvent } from '~/util/sns'

export function upgradeCompleted(block: Block, item: EventItem, skipSave: boolean): [EventModel, SnsEvent | undefined] {
    const event = new EventModel({
        id: item.id,
        name: MigrationsUpgradeCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MigrationsUpgradeCompleted({
            blockNumber: block.height,
            specVersion: block.specVersion,
        }),
    })

    if (skipSave) {
        return [event, undefined]
    }

    return [
        event,
        {
            id: item.id,
            name: item.name,
            body: {
                blockNumber: block.height,
                specVersion: block.specVersion,
            },
        },
    ]
}
