import { nominationPools } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { EarlyBirdBonusCalculated } from './types'

export function earlyBirdBonusCalculated(event: EventItem): EarlyBirdBonusCalculated {
    return match(event)
        .returnType<EarlyBirdBonusCalculated>()
        .when(
            () => nominationPools.earlyBirdBonusCalculated.enjinV1021.is(event),
            () => nominationPools.earlyBirdBonusCalculated.enjinV1021.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
