import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type EarlyBirdBonusCalculatedEvent = {
    totalAmount: bigint
}

export function earlyBirdBonusCalculated(event: EventItem): EarlyBirdBonusCalculatedEvent {
    return match(event)
        .returnType<EarlyBirdBonusCalculatedEvent>()
        .when(nominationPools.earlyBirdBonusCalculated.enjinV1021.is, () =>
            nominationPools.earlyBirdBonusCalculated.enjinV1021.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
