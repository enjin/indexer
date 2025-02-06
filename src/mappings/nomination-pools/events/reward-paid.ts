import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type RewardPaidEvent = {
    poolId: number
    era: number
    validatorStash: string
    reward: bigint
    bonus: bigint
}

export function rewardPaid(event: EventItem) {
    return match(event)
        .returnType<RewardPaidEvent>()
        .when(nominationPools.rewardPaid.enjinV100.is, () => nominationPools.rewardPaid.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.rewardPaid)
        })
}
