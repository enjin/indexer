import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { RewardPaid } from '~/pallet/nomination-pools/events/types'
import { CommissionPayment, Event as EventModel, Extrinsic, NominationPoolsRewardPaid } from '~/model'

export function rewardPaid(event: EventItem): RewardPaid {
    return match(event)
        .returnType<RewardPaid>()
        .when(
            () => nominationPools.rewardPaid.enjinV100.is(event),
            () => nominationPools.rewardPaid.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.rewardPaid.v1060.is(event),
            () => nominationPools.rewardPaid.v1060.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function rewardPaidEventModel(item: EventItem, data: RewardPaid, validatorStash: string): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsRewardPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsRewardPaid({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            era: data.era,
            reward: data.reward,
            bonus: data.bonus ? data.bonus : undefined,
            commission: data.commission
                ? new CommissionPayment({
                      beneficiary: data.commission.beneficiary,
                      amount: data.commission.amount,
                  })
                : null,
            validatorStash,
        }),
    })
}
