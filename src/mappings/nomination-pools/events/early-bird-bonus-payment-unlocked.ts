import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { EarlyBirdBonusPaymentUnlocked } from './types'

export function earlyBirdBonusPaymentUnlocked(event: EventItem): EarlyBirdBonusPaymentUnlocked {
    return match(event)
        .returnType<EarlyBirdBonusPaymentUnlocked>()
        .when(() => nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is(event), nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
