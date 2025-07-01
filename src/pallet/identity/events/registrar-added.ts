import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { RegistrarAdded } from '~/pallet/identity/events/types'

export function registrarAdded(event: EventItem): RegistrarAdded {
    return match(event)
        .returnType<RegistrarAdded>()
        .when(
            () => identity.registrarAdded.matrixEnjinV1000.is(event),
            () => identity.registrarAdded.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
