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

function earlyBirdBonusPaid(event: EventItem) {
    return match(event)
        .returnType<EarlyBirdBonusPaidEvent>()
        .when(nominationPools.earlyBirdBonusPaid.enjinV1023.is, () => nominationPools.earlyBirdBonusPaid.enjinV1023.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.earlyBirdBonusPaid)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof earlyBirdBonusPaid>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaid({
            pool: data.poolId.toString(),
            member: data.member,
            bonusAmount: data.bonusAmount,
        }),
    })
}
