import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusPaid } from '~/model'
import { EarlyBirdBonusPaid } from '~/pallet/nomination-pools/events/types'

export function earlyBirdBonusPaid(event: EventItem): EarlyBirdBonusPaid {
    return match(event)
        .returnType<EarlyBirdBonusPaid>()
        .when(
            () => nominationPools.earlyBirdBonusPaid.enjinV1023.is(event),
            () => nominationPools.earlyBirdBonusPaid.enjinV1023.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function earlyBirdBonusPaidEventModel(item: EventItem, data: EarlyBirdBonusPaid): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaid({
            pool: data.poolId.toString(),
            paymentId: data.paymentId,
            totalAccounts: data.totalAccounts,
        }),
    })
}
