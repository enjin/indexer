import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { EarlyBirdBonusPaymentUnlocked } from '~/pallet/nomination-pools/events/types' 

export function earlyBirdBonusPaymentUnlocked(event: EventItem): EarlyBirdBonusPaymentUnlocked {
    return match(event)
        .returnType<EarlyBirdBonusPaymentUnlocked>()
        .when(
            () => nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is(event),
            () => nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
