import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type EarlyBirdBonusPaymentUnlockedEvent = {
    paymentId: number
    nextPaymentBlock: number
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<EarlyBirdBonusPaymentUnlockedEvent>()
        .when(nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is, () =>
            nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.earlyBirdBonusPaymentUnlocked)
        })
}
