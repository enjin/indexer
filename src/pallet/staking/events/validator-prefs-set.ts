import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ValidatorPrefsSet } from '~/pallet/staking/events/types' 

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
