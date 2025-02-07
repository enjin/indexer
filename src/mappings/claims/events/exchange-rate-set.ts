import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ExchangeRateSetEvent = {
    exchangeRate: number
}

export function exchangeRateSet(event: EventItem): ExchangeRateSetEvent {
    return match(event)
        .returnType<ExchangeRateSetEvent>()
        .when(claims.exchangeRateSet.matrixEnjinV603.is, claims.exchangeRateSet.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
