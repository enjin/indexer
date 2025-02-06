import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ValidatorPrefsSetEvent = {
    stash: string
    prefs: {
        commission: number
        blocked: boolean
    }
}

export function validatorPrefsSet(event: EventItem): ValidatorPrefsSetEvent {
    return match(event)
        .returnType<ValidatorPrefsSetEvent>()
        .when(staking.validatorPrefsSet.enjinV100.is, () => staking.validatorPrefsSet.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
