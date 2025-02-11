import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { AccountRemoved } from './types'

export function accountRemoved(event: EventItem): AccountRemoved {
    return match(event)
        .returnType<AccountRemoved>()
        .when(
            () => fuelTanks.accountRemoved.matrixEnjinV603.is(event),
            () => fuelTanks.accountRemoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
