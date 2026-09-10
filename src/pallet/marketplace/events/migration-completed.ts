import { EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, MarketplaceMigrationCompleted } from '~/model'
import { MigrationCompleted } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function migrationCompleted(event: EventItem): MigrationCompleted {
    if (!marketplace.migrationCompleted.matrixV1040.is(event)) throw new UnsupportedEventError(event)
    return marketplace.migrationCompleted.matrixV1040.decode(event)
}

export function migrationCompletedEventModel(item: EventItem, data: MigrationCompleted): EventModel {
    return new EventModel({
        id: item.id,
        name: MarketplaceMigrationCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MarketplaceMigrationCompleted({ storageVersion: data.storageVersion }),
    })
}
