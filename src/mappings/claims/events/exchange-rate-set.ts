import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ExchangeRateSet } from '@enjin/indexer/mappings/claims/events/types'

export function exchangeRateSet(event: EventItem): ExchangeRateSet {
    return match(event)
        .returnType<ExchangeRateSet>()
        .when(claims.exchangeRateSet.matrixEnjinV603.is, claims.exchangeRateSet.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
