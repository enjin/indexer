import { fuelTanks } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { MutateFreezeStateScheduled } from './types'

export function mutateFreezeStateScheduled(event: EventItem): MutateFreezeStateScheduled {
    return match(event)
        .returnType<MutateFreezeStateScheduled>()
        .when(
            () => fuelTanks.mutateFreezeStateScheduled.matrixEnjinV603.is(event),
            () => fuelTanks.mutateFreezeStateScheduled.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
