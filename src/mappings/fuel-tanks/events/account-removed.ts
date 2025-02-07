import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type AccountRemovedEvent = {
    tankId: string
    userId: string
}

export function accountRemoved(event: EventItem): AccountRemovedEvent {
    return match(event)
        .returnType<AccountRemovedEvent>()
        .when(fuelTanks.accountRemoved.matrixEnjinV603.is, fuelTanks.accountRemoved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
