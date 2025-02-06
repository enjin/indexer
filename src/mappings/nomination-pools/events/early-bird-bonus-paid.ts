import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusPaid } from '../../../model'

type EarlyBirdBonusPaidEvent = {
    poolId: number
    paymentId: number
    totalAccounts: number
}

function earlyBirdBonusPaid(event: EventItem): EarlyBirdBonusPaidEvent {
    return match(event)
        .returnType<EarlyBirdBonusPaidEvent>()
        .when(nominationPools.earlyBirdBonusPaid.enjinV1023.is, () => nominationPools.earlyBirdBonusPaid.enjinV1023.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function earlyBirdBonusPaidEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaid({
            pool: data.poolId.toString(),
            paymentId: 0, // data.paymentId,
            totalAccounts: 0, // data.totalAccounts,
        }),
    })
}
