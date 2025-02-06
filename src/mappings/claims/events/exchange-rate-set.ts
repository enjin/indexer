import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ExchangeRateSetEvent = {
    exchangeRate: number
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<ExchangeRateSetEvent>()
        .when(claims.exchangeRateSet.matrixEnjinV603.is, () => claims.exchangeRateSet.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(claims.exchangeRateSet)
        })
}
