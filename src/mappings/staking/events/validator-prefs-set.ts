import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ValidatorPrefsSet } from './types'

export function validatorPrefsSet(event: EventItem): ValidatorPrefsSet {
    return match(event)
        .returnType<ValidatorPrefsSet>()
        .when(staking.validatorPrefsSet.enjinV100.is, staking.validatorPrefsSet.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
