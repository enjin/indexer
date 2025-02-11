import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { EarlyBirdBonusCalculated } from './types'

export function earlyBirdBonusCalculated(event: EventItem): EarlyBirdBonusCalculated {
    return match(event)
        .returnType<EarlyBirdBonusCalculated>()
        .when(() => nominationPools.earlyBirdBonusCalculated.enjinV1021.is(event), nominationPools.earlyBirdBonusCalculated.enjinV1021.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
