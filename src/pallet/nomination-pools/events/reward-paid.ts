import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { RewardPaid } from '~/pallet/nomination-pools/events/types' 

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
