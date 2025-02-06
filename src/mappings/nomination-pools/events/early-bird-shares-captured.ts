import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdSharesCaptured } from '../../../model'

type EarlyBirdSharesCapturedEvent = {
    poolId: number
    totalAccounts: number
}

function earlyBirdSharesCaptured(event: EventItem): EarlyBirdSharesCapturedEvent {
    return match(event)
        .returnType<EarlyBirdSharesCapturedEvent>()
        .when(nominationPools.earlyBirdSharesCaptured.enjinV1022.is, () =>
            nominationPools.earlyBirdSharesCaptured.enjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.earlyBirdSharesCaptured)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof earlyBirdSharesCaptured>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdSharesCaptured.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdSharesCaptured({
            pool: data.poolId.toString(),
            totalAccounts: data.totalAccounts,
        }),
    })
}
