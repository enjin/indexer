import { nominationPools } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
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
