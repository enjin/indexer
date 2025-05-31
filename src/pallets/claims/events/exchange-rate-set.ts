import { claims } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { ExchangeRateSet } from './types'

export function exchangeRateSet(event: EventItem): ExchangeRateSet {
    return match(event)
        .returnType<ExchangeRateSet>()
        .when(
            () => claims.exchangeRateSet.matrixEnjinV603.is(event),
            () => claims.exchangeRateSet.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
