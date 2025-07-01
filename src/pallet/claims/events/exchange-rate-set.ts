import { claims } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ExchangeRateSet } from '~/pallet/claims/events/types'

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
