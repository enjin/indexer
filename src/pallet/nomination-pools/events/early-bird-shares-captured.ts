import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdSharesCaptured } from '~/model'
import { EarlyBirdSharesCaptured } from '~/pallet/nomination-pools/events/types'

export function earlyBirdSharesCaptured(event: EventItem): EarlyBirdSharesCaptured {
    return match(event)
        .returnType<EarlyBirdSharesCaptured>()
        .when(
            () => nominationPools.earlyBirdSharesCaptured.enjinV1022.is(event),
            () => nominationPools.earlyBirdSharesCaptured.enjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function earlyBirdSharesCapturedEventModel(item: EventItem, data: EarlyBirdSharesCaptured): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdSharesCaptured.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdSharesCaptured({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            totalAccounts: data.totalAccounts,
        }),
    })
}
