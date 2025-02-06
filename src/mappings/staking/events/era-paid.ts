import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type EraPaidEvent = {
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

export function eraPaid(event: EventItem) {
    return match(event)
        .returnType<EraPaidEvent>()
        .when(staking.eraPaid.enjinV100.is, () => staking.eraPaid.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(staking.eraPaid.enjinV100)
        })
}
