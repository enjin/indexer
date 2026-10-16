import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsRewardPayoutFailed } from '~/model'
import { RewardPayoutFailed } from '~/pallet/nomination-pools/events/types'

export function rewardPayoutFailed(event: EventItem): RewardPayoutFailed {
    return match(event)
        .returnType<RewardPayoutFailed>()
        .when(
            () => nominationPools.rewardPayoutFailed.enjinV1080.is(event),
            () => nominationPools.rewardPayoutFailed.enjinV1080.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function rewardPayoutFailedEventModel(
    item: EventItem,
    data: RewardPayoutFailed,
    validatorStash: string,
    error: string | null
): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsRewardPayoutFailed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsRewardPayoutFailed({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            era: data.era,
            validatorStash,
            reward: data.reward,
            error,
        }),
    })
}
