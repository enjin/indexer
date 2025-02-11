import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { EraPaid } from './types'

export function eraPaid(event: EventItem): EraPaid {
    return match(event)
        .returnType<EraPaid>()
        .when(staking.eraPaid.enjinV100.is, staking.eraPaid.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
