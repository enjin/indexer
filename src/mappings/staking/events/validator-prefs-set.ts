import { staking } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { ValidatorPrefsSet } from './types'

export function validatorPrefsSet(event: EventItem): ValidatorPrefsSet {
    return match(event)
        .returnType<ValidatorPrefsSet>()
        .when(
            () => staking.validatorPrefsSet.enjinV100.is(event),
            () => staking.validatorPrefsSet.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
