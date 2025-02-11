import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { RewardPaid } from './types'

export function rewardPaid(event: EventItem): RewardPaid {
    return match(event)
        .returnType<RewardPaid>()
        .when(
            () => nominationPools.rewardPaid.enjinV100.is(event),
            () => nominationPools.rewardPaid.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
